"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import moment from "moment";

interface IProps {
  tornamentProps: {
    id: number;
    host_id: number;
    title: string;
    game_type: string;
    max_players: number;
    start_date: string;
    end_date: string;
    location: string;
    banner: string;
    entry_fee: string;
    sponsor_target: string;
    total_sponsor_amount: string;
    is_funded: number;
    currency_code: string;
    currency_symbol: string;
    created_at: string;
    updated_at: string;
  };
}

const GameCard: FC<IProps> = ({
  tornamentProps: {
    id,
    host_id,
    title,
    game_type,
    max_players,
    start_date,
    end_date,
    location,
    banner,
    entry_fee,
    sponsor_target,
    total_sponsor_amount,
    is_funded,
    currency_code,
    currency_symbol,
    created_at,
    updated_at,
  },
}) => {
  const { push } = useRouter();
  return (
    <div className='w-[181px] min-h-[183px] h-fit bg-black flex flex-col space-y-[7px] rounded-[9px] shadow-cardShadow'>
      {/* Game Flyer */}
      <Image src={`${banner}`} width={181} height={100} alt='game flyer' />

      {/* Game Info */}
      <div className='space-y-[18px] px-[13px]'>
        {/* Tournament Name and Date */}
        <div className='flex flex-col items-start space-y-[3px]'>
          <h3 className='font-sans font-[700] text-[0.5rem] text-white'>
            {title}
          </h3>
          <p className='font-sans font-[400] text-[0.5rem] text-white'>
            {moment(start_date).format("Do MMMM YYYY")}
            {`${!!end_date && moment(end_date).format("Do MMMM YYYY")}`}
          </p>
        </div>

        {/* See More */}
        <div className='w-full flex items-center justify-between  pb-[13px]'>
          {/* Participants */}
          <h4 className='text-white text-[0.5rem] font-[400] flex items-center gap-[5.5px]'>
            <span className='font-[700]'>{max_players}</span>
            Participants
          </h4>

          {/* More Button */}
          <Button
            placeholder='More'
            ripple={true}
            onClick={() => {push(`/games/${id}`)}}
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
