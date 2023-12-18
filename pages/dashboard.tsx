"use client";
import React from "react";
import GameCard from "@/components/game-card";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useGetTournamentsQuery } from "@/redux/services/get-tournaments";

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

const Dashboard = () => {
  // Get Tournaments API Query
  const { data, isLoading, isError, isSuccess } = useGetTournamentsQuery();
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <div className='w-full h-full min-h-screen flex flex-col justify-start items-center gap-y-[42px] py-[48px]'>
        {/* Top */}
        <div className='space-y-[16px]'>
          {/* Host Tournament */}
          <Button
            placeholder='Hosting Tournament'
            ripple={true}
            className='text-white bg-[#003049] w-full h-[40px] rounded-[5px]'
          >
            Host Tournament
          </Button>

          {/* Hero Image */}
          <Image
            src='/dashboard-hero-img.png'
            width={360}
            height={141.73}
            priority
            alt='hero-img'
          />
        </div>

        {/* Game Tournaments */}
        <div className='w-full flex justify-between items-center flex-wrap gap-x-[12.8px] gap-y-[18.3px]'>
          {/* When Loading */}
          {isLoading ? (
            <div className='w-full flex items-center justify-center text-white text-[1rem] font-[600]'>
              Loading...
            </div>
          ) : null}

          {/* When There is Data */}
          {isSuccess && !isLoading
            ? data?.data?.tournaments?.map((tournament, idx) => (
                <GameCard key={idx} tornamentProps={tournament} />
              ))
            : null}

          {/* When An Error Occurs */}
          {!isLoading && isError ? (
            <div className='w-full flex items-center justify-center text-white text-[1rem] font-[600]'>
              Could not fetch Available Tournaments
            </div>
          ) : null}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
