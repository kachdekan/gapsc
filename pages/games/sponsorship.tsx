import React from "react";
import SponsorshipPackCard from "@/components/sponsorship-pack-card";

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
  return (
    <div className='w-full flex flex-col items-center gap-y-[32px] pt-[80px] pb-[40px]'>
      <h5 className='text-white text-base font-[600]'>Choose a Subscription</h5>
      {/* Sponsorship packs */}
      <div className='flex flex-col gap-y-[40px]'>
        {/* Bronze Package */}
        <SponsorshipPackCard
          tier='Bronze'
          title="What You'll Get"
          perks={bronzeSponsorshipPerks}
          sponsorshipAmount="100"
        />
        {/* Silver Package */}
        <SponsorshipPackCard
          tier='Silver'
          title="What You'll Get"
          perks={silverSponsorshipPerks}
          sponsorshipAmount="300"
        />
        {/* Gold Package */}
        <SponsorshipPackCard
          tier='Gold'
          title="What You'll Get"
          perks={goldSponsorshipPerks}
          sponsorshipAmount="500"
        />
      </div>
    </div>
  );
};

export default SponsorshipPack;
