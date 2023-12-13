import GameCard from "@/components/game-card";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-start gap-y-[42px]'>
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
          alt='hero-img'
        />
      </div>

      {/* Game Tournaments */}
      <div className='w-full flex justify-between items-center flex-wrap gap-x-[12.8px] gap-y-[18.3px]'>
        {/* FIFA */}
        <GameCard
          flyerImage='/FIFA-game-flyer-sm.png'
          participants='0'
          tournamentDate='Jan 12 - Jan 14 2024'
          tournamentName='EA SPORTS FC 24 BEST OF JANUARY'
        />
        {/* COD */}
        <GameCard
          flyerImage='/COD-game-flyer-sm.png'
          tournamentDate='Jan 12 2023'
          tournamentName='CODM Weekly Brawls'
          participants='0'
        />
        {/* EA FC */}
        <GameCard
          flyerImage='/EAFC-game-flyer-sm.png'
          tournamentDate='Jun 24 - Jun 26 2020'
          tournamentName='Call of duty:  Warzone by Convexity'
          participants='0'
        />
        {/* Rocket League */}
        <GameCard
          flyerImage='/rocket-league-game-flyer-sm.png'
          tournamentDate='Jun 24 - Jun 26 2020'
          tournamentName='Rocket League Finals'
          participants='0'
        />
        {/* Killer maid */}
        <GameCard
          flyerImage='/killer-maid-game-flyer-sm.png'
          participants='0'
          tournamentDate='Jan 20 - Jan 25 2024'
          tournamentName='Killer maid'
        />
        {/* annihilation */}
        <GameCard
          flyerImage='/annihilation-game-flyer-sm.png'
          participants='0'
          tournamentDate='Feb 1 - Feb 6 2024'
          tournamentName='Annihilation Finals'
        />
      </div>
    </div>
  );
};

export default Dashboard;
