"use client";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  isOkay?: boolean;
}

const initialState: IGlobalState = {
  isOkay: false,
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setIsOkay: (state, action: PayloadAction<boolean>) => {
      state.isOkay = action?.payload;
    },
  },
});

export const { setIsOkay } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const GlobalSlice = (state: RootState) => state.globalSlice;

export default globalSlice.reducer;
