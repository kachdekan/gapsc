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
  tournament_id: string;
  sponsor_id: string;
  tournament_package_id: string;
}

export const sponsorTournamentApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Sponsor Tournament
    sponsorTournament: builder.mutation<IResponse, IPayload>({
      query: (body) => ({
        url: `tournaments/sponsor/`,
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useSponsorTournamentMutation } = sponsorTournamentApiSlice;
