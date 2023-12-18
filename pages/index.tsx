"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

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

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const { push } = useRouter();

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address!);
    }
  }, [address, isConnected]);

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <div className='w-full h-full flex flex-col justify-center items-center space-y-[39px]'>
        {/* Join Tournament */}
        <Button
          placeholder='Joining Tournament'
          ripple={true}
          className='text-white bg-red w-[279px] h-[40px] rounded-[5px]'
          onClick={() => {
            push("/dashboard");
          }}
        >
          Join a Tournament
        </Button>

        {/* Buy Gift Card */}
        <Button
          placeholder='Buying GiftCards'
          ripple={true}
          className='text-white bg-grey w-[279px] h-[40px] rounded-[5px]'
        >
          Buy GiftCards
        </Button>

        {/* Claim Rewards */}
        <Button
          placeholder='Claim Rewards'
          ripple={true}
          className='text-white bg-grey w-[279px] h-[40px] rounded-[5px]'
        >
          Claim Rewards
        </Button>
      </div>
    </ErrorBoundary>
  );
}
