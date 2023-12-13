import React from "react";
import { useRouter } from "next/router";
import GAPLogoFilled from "@/public/GAP-logo-filled.png";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

enum fundedStatus {
  funded = "Funded",
  notFunded = "Not Funded",
}

const Game = () => {
  const {push} = useRouter();
  return (
    <div className='w-[360px] h-[590px] bg-black px-[20px] py-[40px] space-y-[80px]'>
      <div className='w-full space-y-[20px]'>
        {/* Header */}
        <div className='w-full flex items-center justify-between'>
          {/* Tournament Name */}
          <div className='text-white font-sans font-[600]'>EA SPORTS FC 24</div>
          {/* Tournament Funded status*/}
          <div className='text-white font-sans font-[800] text-[0.55rem]'>
            {fundedStatus.funded}
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
                GAP Network
              </span>
            </div>

            {/* Game Console Type */}
            <div className='text-white text-[0.8rem] font-[900] uppercase border-b-[1px] border-b-red'>
              ps5
            </div>
          </div>

          {/* Tournament Flyer */}
          <div className='w-full flex justify-center'>
            <Image
              src='/FIFA-game-flyer-lg.png'
              width={250}
              height={250}
              alt='FIFA Game Flyer'
            />
          </div>

          {/* Join For 1 dollar */}
          <Button
            placeholder='Sponsor Tournament'
            ripple={true}
            onClick={()=>push("/games/input-IGN")}
            className='text-white text-[0.875rem] bg-red w-full h-[40px] rounded-[5px]'
          >
            Join for $1
          </Button>

          {/* Sponsor Tournament Button */}
          <Button
            placeholder='Sponsor Tournament'
            ripple={true}
            className='text-white text-[0.875rem] bg-green w-full h-[40px] rounded-[5px]'
          >
            Sponsor Tournament
          </Button>
        </div>
      </div>

      <div className="space-y-[40px]">
        {/* Tournament Participants Icons and sponsors */}
        <div className='w-full flex items-center justify-between'>
          {/* Participants */}
          <div className='flex items-center space-x-[8px]'>
            <div className='flex items-center'>
              <div>
                <Image
                  src='/participants-icon.png'
                  width={26.6}
                  height={26.6}
                  alt='Participants Icon'
                />
              </div>
              <div className='ml-[-20px]'>
                <Image
                  src='/participants-icon.png'
                  width={26.6}
                  height={26.6}
                  alt='Participants Icon'
                />
              </div>
              <div className='ml-[-20px]'>
                <Image
                  src='/participants-icon.png'
                  width={26.6}
                  height={26.6}
                  alt='Participants Icon'
                />
              </div>
            </div>

            <div className='text-white text-[0.87rem] font-[900]'>0/100</div>
          </div>

          {/* Sponsors */}
          <div className='flex items-center space-x-[8px]'>
            <Image
              src='/epic-games-logo.png'
              width={26.6}
              height={26.6}
              alt='epic games Icon'
            />
            <Image
              src='/steam-logo.png'
              width={26.6}
              height={26.6}
              alt='steam Icon'
            />
            <Image
              src='/convexity-logo.png'
              width={26.6}
              height={26.6}
              alt='convexity Icon'
            />
          </div>
        </div>
        {/* Location */}
        <div className='w-full flex items-center justify-center space-x-[8px]'>
          <Image
            src='/location-icon.png'
            width={26.6}
            height={26.6}
            alt='Participants Icon'
          />
          <h5 className="text-white text-[0.75rem] font-sans font-[900]">Wuse Zone 6 Convexity</h5>
        </div>
      </div>
    </div>
  );
};

export default Game;
