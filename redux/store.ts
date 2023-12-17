import { configureStore } from "@reduxjs/toolkit";

import { baseApiSlice } from "./api/base-api";

// Import Setup Listener
import { setupListeners } from "@reduxjs/toolkit/query";

import globalSliceReducers from "./slices/global";

// Create Redux Store with our base apiSlice
export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    globalSlice: globalSliceReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(baseApiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

// Inferred type
export type AppDispatch = typeof store.dispatch;
