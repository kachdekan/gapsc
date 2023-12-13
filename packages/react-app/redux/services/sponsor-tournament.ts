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

export const getTournamentPackagesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets tournaments
    getTournamentPackages: builder.mutation<IResponse, IPayload>({
      query: ({ tournament_id, sponsor_id, tournament_package_id }) => ({
        url: `tournaments/packages/`,
        method: "GET",
        body: {},
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetTournamentPackagesMutation } =
  getTournamentPackagesApiSlice;
