import React, { FC } from "react";

interface IProps {
  tier: string;
  title: string;
  perks: string[];
}

const SponsorshipPackCard: FC<IProps> = ({ tier, title, perks }) => {
  return (
    <div className='w-[280px] h-[390px] bg-black px-[23px] space-y-[8px] py-[21px] rounded-[25px]'>
      {/* Tier */}
      <div className='w-full flex items-center justify-center text-white text-[1.5rem] font-[900]'>
        {tier}
      </div>

      {/* Details */}
      <div className="space-y-[12px] border-b-[1px] border-dashed border-[1px]">
        <div className='w-full flex flex-col items-center gap-y-[16px]'>
          {/* Title */}
          <h5 className='text-white text-[0.87rem] font-[400]'>{title}</h5>

          {/* Perks */}
          {perks?.map((perk, idx) => (
            <div key={idx} className='w-full flex-items-center space-x-[6px]'>
              <span>
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.97829 1.55664C4.31273 1.55664 1.33057 4.53881 1.33057 8.20436C1.33057 11.8699 4.31273 14.8521 7.97829 14.8521C11.6438 14.8521 14.626 11.8699 14.626 8.20436C14.626 4.53881 11.6438 1.55664 7.97829 1.55664ZM6.64941 11.138L4.18111 8.67502L5.11977 7.7337L6.64808 9.25936L10.1674 5.74005L11.1074 6.68004L6.64941 11.138Z'
                    fill='white'
                  />
                </svg>
              </span>
              {/* perk */}
              <p className='text-white font-[400]'>{perk}</p>
            </div>
          ))}
        </div>

        {/* Amount payout */}
        <div className="space-y-[14px]">
         {/* Payout */}
         <div className="flex items-center justify-start text-white text-[21px] font-[700]">
            $100
         </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPackCard;
