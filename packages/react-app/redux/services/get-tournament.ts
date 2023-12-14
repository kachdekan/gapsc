"use client";
import { baseApiSlice } from "../api/base-api";

export interface ITournamentResponse {
  success: true;
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
      players: {
        id: number;
        player_id: number;
        tournament_id: number;
        ign: string;
        position: string;
        created_at: string;
        updated_at: string;
      }[];
      host: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        email_verified_at: string;
        wallet_id: string;
        user_type: string;
        created_at: string;
        updated_at: string;
      };
      sponsors: {
        id: number;
        tournament_id: number;
        sponsor_id: number;
        tournament_package_id: number;
        created_at: string;
        updated_at: string;
      }[];
    }[];
  };
}

interface IPayload {
  tournamentId: string;
}

export const getSingleTournamentApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets Single tournament
    getSingleTournament: builder.query<ITournamentResponse, IPayload>({
      query: ({ tournamentId }) => ({
        url: `tournaments/${tournamentId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetSingleTournamentQuery, useGetSingleTournamentQuery } =
  getSingleTournamentApiSlice;
