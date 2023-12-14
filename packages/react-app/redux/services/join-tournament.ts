"use client"
import { baseApiSlice } from "../api/base-api";
import { ITournamentsResponse } from "./get-tournaments";

interface IResponse {
  success: boolean;
  data: {
    tournaments: ITournamentsResponse["data"]["tournaments"];
  };
}

interface IPayload {
  tournament_id: string;
  player_id: string;
  ign: string;
}

export const joinTournamentApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Join Turnament
    joinTournament: builder.mutation<IResponse, IPayload>({
      query: (body) => ({
        url: `tournaments/join/`,
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useJoinTournamentMutation } = joinTournamentApiSlice;
