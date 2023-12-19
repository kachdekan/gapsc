"use client";
import React from "react";
import { useRouter } from "next/router";
import SponsorshipPackCard from "@/components/sponsorship-pack-card";

import { ErrorBoundary } from "react-error-boundary";
import { useGetTournamentPackagesQuery } from "@/redux/services/get-tournament-packages";

function Fallback({ error, resetErrorBoundary }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const bronzeSponsorshipPerks = [
  "Social media mentions/tags",
  "Logo on Digital Flyers",
  "12/7 Support",
];

const silverSponsorshipPerks = [
  "All from Bronze",
  "Logo on physical flyers/banners at Venue",
  "Pitch brand to Participants",
];

const goldSponsorshipPerks = [
  "All from Silver",
  "Sales Booth for Brand",
  "Advanced Analytics",
];

const SponsorshipPack = () => {
  const { query, push } = useRouter();

  // Access Tournament Tournament ID query parameters
  const tournamentId = query.tournament_id;

  // Get Sponsorship Packages
  const { data, isSuccess, isError } = useGetTournamentPackagesQuery({
    tournamentId: `${tournamentId}`,
  });

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <div className='w-full flex flex-col items-center gap-y-[32px] pt-[80px] pb-[40px]'>
        <h5 className='text-white text-base font-[600]'>
          Choose a Subscription
        </h5>
        {/* Sponsorship packs */}
        <div className='flex flex-col gap-y-[40px]'>
          {data?.data?.packages?.map((_package, idx) => (
            <SponsorshipPackCard
              key={idx}
              tournament_id={_package?.tournament_id}
              sponsor_id='1' // FOR NOW
              tournament_package_id={
                _package?.package_details?.[idx]?.tournament_package_id
              }
              tier={`${_package?.name}`}
              title="What You'll Get"
              perks={_package?.package_details}
              sponsorshipAmount={`${_package?.amount}`}
            />
          ))}
          {/* Silver Package */}
          {/* <SponsorshipPackCard
            tier='Silver'
            title="What You'll Get"
            perks={silverSponsorshipPerks}
            sponsorshipAmount='300'
          /> */}
          {/* Gold Package */}
          {/* <SponsorshipPackCard
            tier='Gold'
            title="What You'll Get"
            perks={goldSponsorshipPerks}
            sponsorshipAmount='500'
          /> */}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SponsorshipPack;
