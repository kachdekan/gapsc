import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import GAPLogoFilled from "@/public/GAP-logo-filled.png";
import { Button } from "@material-tailwind/react";
import { useGetSingleTournamentQuery } from "@/redux/services/get-tournament";
import { useAccount } from "wagmi";
import { transferCUSD } from "@/utils/transactions";
import BackIcon from "@/components/Back-icon";

import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

enum fundedStatus {
  funded = "Funded",
  notFunded = "Not Funded",
}

const SponsorLogos = [
  "/epic-games-logo.png",
  "/steam-logo.png",
  "/convexity-logo.png",
];

const Game = () => {
  const { push, query, back } = useRouter();

  // Holds User Address accessed from wagmi
  const [userAddress, setUserAddress] = useState<string>("");

  // Get Wallet address and Connected status
  const { address, isConnected } = useAccount();

  // Get Game ID from Query
  const { gameId } = query;

  // Get Tournament API Query
  const { data, isLoading, isError, isSuccess } = useGetSingleTournamentQuery({
    tournamentId: `${gameId}`,
  });

  console.log("TOURNAMENT DATA: ", data);

  // Generate Player ID. This will be gotten from the logged In Player in the main version
  const playerId = Math.floor(Math.random() * 10) + 1;

  // Get User Address When wallet is connected
  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address!);
    }
  }, [address, isConnected]);

  const handleJoinTournament = async () => {
    await transferCUSD({ userAddress: userAddress })
      .then(() => {
        push(`/games/input-IGN?tournament_id=${gameId}&player_id=${playerId}`);
      })
      .catch(() => {
        alert("Error");
      });
  };

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <div className='flex flex-col space-y-[10px]'>
        {/* Go Back Button */}
        <button className='flex items-center justify-start pl-[10px]'>
          <span
            className='flex items-center space-x-[4px] text-[0.85rem] text-white font-bold'
            onClick={() => {
              back();
            }}
          >
            <BackIcon />
            <p>Back</p>
          </span>
        </button>
        {/* Go Back Button End */}

        {/* When data is available */}
        {isSuccess && !isLoading ? (
          <div className='w-[360px] h-[590px] bg-black px-[20px] py-[40px] space-y-[80px]'>
            <div className='w-full space-y-[20px]'>
              {/* Header */}
              <div className='w-full flex items-center justify-between'>
                {/* Tournament Name */}
                <div className='text-white font-sans font-[600]'>
                  {data?.data?.tournaments?.[0]?.title}
                </div>
                {/* Tournament Funded status*/}
                <div className='text-white font-sans font-[800] text-[0.55rem] whitespace-nowrap'>
                  {data?.data?.tournaments?.[0]?.is_funded === 0
                    ? fundedStatus.notFunded
                    : fundedStatus.funded}
                </div>
              </div>

              {/* Game Details */}
              <div className='w-full space-y-[20px]'>
                {/* Host Name and Game Console type */}
                <div className='w-full flex items-center justify-between'>
                  {/* Host Name */}
                  <div className='flex items-center space-x-[9px]'>
                    <Image
                      src={GAPLogoFilled}
                      width={40}
                      height={40}
                      alt='GAP Logo Filled'
                    />
                    <span className='text-white text-[0.8rem] font-[400]'>
                      {data?.data?.tournaments?.[0]?.host?.first_name}&nbsp;
                      {data?.data?.tournaments?.[0]?.host?.last_name}
                    </span>
                  </div>

                  {/* Game Console Type */}
                  <div className='text-white text-[0.8rem] font-[900] uppercase border-b-[1px] border-b-red'>
                    {data?.data?.tournaments?.[0]?.game_type}
                  </div>
                </div>

                {/* Tournament Flyer */}
                <div className='w-full flex justify-center'>
                  <Image
                    src={
                      data?.data?.tournaments?.[0]?.banner ??
                      "/FIFA-game-flyer-lg.png"
                    }
                    width={250}
                    height={250}
                    alt='FIFA Game Flyer'
                  />
                </div>

                {/* Join Tournament Button */}
                {data?.data?.tournaments?.[0]?.is_funded === 1 ? (
                  <Button
                    placeholder='Join Tournament'
                    ripple={true}
                    onClick={() => {
                      handleJoinTournament();
                    }}
                    className='text-white text-[0.875rem] bg-red w-full h-[40px] rounded-[5px]'
                  >
                    Join for {data?.data?.tournaments?.[0]?.currency_symbol}
                    {data?.data?.tournaments?.[0]?.entry_fee}
                  </Button>
                ) : null}

                {/* Sponsor Tournament Button */}
                {/* {isConnected ? ( */}
                <Button
                  placeholder='Sponsor Tournament'
                  ripple={true}
                  onClick={() => push("games/sponsorship")}
                  className='text-white text-[0.875rem] bg-green w-full h-[40px] rounded-[5px]'
                >
                  Sponsor Tournament
                </Button>
                {/* ) : null} */}
              </div>
            </div>

            <div className='space-y-[40px]'>
              {/* Tournament Participants Icons and sponsors */}
              <div className='w-full flex items-center justify-between'>
                {/* Participants */}
                <div className='flex items-center space-x-[8px]'>
                  <div className='flex items-center ml-[20px]'>
                    {data?.data?.tournaments?.[0]?.players?.map(
                      (player, idx) => (
                        <div key={idx} className='ml-[-20px]'>
                          <Image
                            src='/participants-icon.png'
                            width={26.6}
                            height={26.6}
                            alt='Participants Icon'
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Players and max players */}
                  <div className='text-white text-[0.87rem] font-[900]'>
                    {`${data?.data?.tournaments?.[0]?.players?.length}/${data?.data?.tournaments?.[0]?.max_players}`}
                  </div>
                </div>

                {/* Sponsors */}
                <div className='flex items-center space-x-[8px]'>
                  {data?.data?.tournaments?.[0]?.sponsors?.map(
                    (sponsor, idx) => (
                      <Image
                        key={idx}
                        src={SponsorLogos[idx] ?? "/epic-games-logo.png"}
                        width={26.6}
                        height={26.6}
                        alt='epic games Icon'
                      />
                    )
                  )}
                </div>
              </div>
              {/* Location */}
              <div className='w-full flex items-center justify-center space-x-[8px]'>
                <div className=''>
                  <Image
                    src='/location-icon.png'
                    width={26.6}
                    height={26.6}
                    alt='Participants Icon'
                  />
                </div>
                <h5 className='text-white text-[0.75rem] text-end font-sans font-[900]'>
                  {data?.data?.tournaments?.[0]?.location ??
                    "Wuse Zone 6 Convexity"}
                </h5>
              </div>
            </div>
          </div>
        ) : (
          false
        )}

        {/* When Loading Data */}
        {isLoading && !isSuccess && !isError ? (
          <div className='w-[360px] h-[590px] bg-black flex items-center justify-center px-[20px] py-[40px] space-y-[80px] text-[0.8rem]'>
            Loading...
          </div>
        ) : (
          false
        )}

        {/* When Error is encoutered */}
        {isError && !isSuccess && !isLoading ? (
          <div className='w-[360px] h-[590px] bg-black flex items-center justify-center px-[20px] py-[40px] space-y-[80px] text-[0.8rem]'>
            Could not fetch tournament data
          </div>
        ) : (
          false
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Game;
