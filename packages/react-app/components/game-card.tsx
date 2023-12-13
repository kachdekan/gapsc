"use client"
import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRouter } from "next/navigation";

interface IProps {
  tournamentName: string;
  tournamentDate: string;
  participants: string | number;
  flyerImage: string | StaticImport;
}

const GameCard: FC<IProps> = ({
  tournamentName,
  tournamentDate,
  participants,
  flyerImage,
}) => {
    const {push} = useRouter()
  return (
    <div className='w-[181px] min-h-[183px] h-fit bg-black flex flex-col space-y-[7px] rounded-[9px] shadow-cardShadow'>
      {/* Game Flyer */}
      <Image src={`${flyerImage}`} width={181} height={100} alt='game flyer' />

      {/* Game Info */}
      <div className='space-y-[18px] px-[13px]'>
        {/* Tournament Name and Date */}
        <div className='flex flex-col items-start space-y-[3px]'>
          <h3 className='font-sans font-[700] text-[0.5rem] text-white'>
            {tournamentName}
          </h3>
          <p className='font-sans font-[400] text-[0.5rem] text-white'>
            {tournamentDate}
          </p>
        </div>

        {/* See More */}
        <div className='w-full flex items-center justify-between  pb-[13px]'>
          {/* Participants */}
          <h4 className='text-white text-[0.5rem] font-[400] flex items-center gap-[5.5px]'>
            <span className='font-[700]'>{participants}</span>
            Participants
          </h4>

          {/* More Button */}
          <Button
            placeholder='More'
            ripple={true}
            onClick={() => push("/games/2")}
            className='text-white text-[0.5rem] bg-red w-fit h-fit flex items-center gap-[5.5px] !py-[5.5px] !px-[8.25px] rounded-[5px]'
          >
            More{" "}
            <svg
              width='5'
              height='6'
              viewBox='0 0 5 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.747559 0.945993L1.35767 0.499023L4.74756 2.99902L1.35424 5.49902L0.747559 5.05205L3.53419 2.99902L0.747559 0.945993Z'
                fill='#FCFCFC'
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
