"use client";
import { baseApiSlice } from "../api/base-api";

interface IResponse {
  success: true;
  data: {
    packages: {
      id: number;
      tournament_id: number;
      name: "Bronze" | "Silver" | "Gold";
      amount: string;
      created_at: string;
      updated_at: string;
      package_details: {
        id: number;
        tournament_package_id: number;
        description: string;
        created_at: string;
        updated_at: string;
      }[];
    }[];
  };
}

interface IPayload {
  tournamentId: string;
}

export const getTournamentPackagesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets tournaments
    getTournamentPackages: builder.query<IResponse, IPayload>({
      query: ({ tournamentId }) => ({
        url: `tournaments/packages/${tournamentId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useLazyGetTournamentPackagesQuery,
  useGetTournamentPackagesQuery,
} = getTournamentPackagesApiSlice;
