"use client"
import { baseApiSlice } from "../api/base-api";

export interface ITournamentsResponse {
  success: boolean;
  data: {
    tournaments: {
      id: number;
      host_id: number;
      title: string;
      game_type: string;
      max_players: number;
      start_date: string;
      end_date: string;
      location: string;
      banner: string;
      entry_fee: string;
      sponsor_target: string;
      total_sponsor_amount: string;
      is_funded: number;
      currency_code: string;
      currency_symbol: string;
      created_at: string;
      updated_at: string;
    }[];
  };
}

export const getAllAccountsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets tournaments
    getTournaments: builder.query<ITournamentsResponse, void>({
      query: () => ({
        url: "/tournaments",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["TOURNAMENT"],
    }),
  }),
});

export const { useLazyGetTournamentsQuery, useGetTournamentsQuery } =
  getAllAccountsApiSlice;
