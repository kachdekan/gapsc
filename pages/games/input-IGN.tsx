"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useJoinTournamentMutation } from "@/redux/services/join-tournament";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

import { ErrorBoundary } from "react-error-boundary";
import { transferCUSD } from "@/utils/transactions";
import { useAccount } from "wagmi";

function Fallback({ error, resetErrorBoundary }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const InputIGN = () => {
  const { query, push } = useRouter();

  const [IGN, setIGN] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIGN(e?.target?.value);
  };

  // Access Tournament Tournament ID query parameters
  const tournamentId = query.tournament_id;

  // Access Player Id
  const playerId = query.player_id;

  // Holds User Address accessed from wagmi
  const [userAddress, setUserAddress] = useState<string>("");

  // Get Wallet address and Connected status
  const { address, isConnected } = useAccount();

  // Get User Address When wallet is connected
  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address!);
    }
  }, [address, isConnected]);

  // Join Tournament API mutation
  const [joinTournament, { data, isLoading, isError }] =
    useJoinTournamentMutation();

  // Subbmit Form
  const handleSubmit = async () => {
    await transferCUSD({ userAddress: userAddress })
      .then(() => {
        joinTournament({
          tournament_id: `${tournamentId}`,
          player_id: `${playerId}`,
          ign: `${IGN}`,
        })
          .unwrap()
          .then(() => {
            push(`/games/registration-successful`);
          })
          .catch((err: any) => {
            alert(err ?? "Error Getting you In!");
          });
      })
      .catch((err: any) => {
        alert(`ERROR: ${err}`);
      });
  };
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <form
        className='flex flex-col items-center gap-y-[32px]'
        onSubmit={() => handleSubmit()}
      >
        <input
          type='text'
          placeholder='Input IGN'
          onChange={(e) => handleInputChange(e)}
          name='IGN'
          required
          className='bg-transparent w-full text-center text-white text-[0.87] font-[700] px-[12px] py-[12px] border-[1px] border-red rounded-[5px]'
        />

        <Button
          placeholder='Sponsor Tournament'
          ripple={true}
          disabled={isLoading}
          className='text-white text-[0.875rem] bg-red w-[170px] h-[40px] rounded-[5px]'
        >
          {isLoading ? "Submiting..." : "Continue"}
        </Button>
      </form>
    </ErrorBoundary>
  );
};

export default InputIGN;
