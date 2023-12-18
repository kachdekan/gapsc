"use client"
import React from 'react'
import { Button } from '@material-tailwind/react';

const RegistrationSuccessful = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-[32px]'>
      <h5 className="text-white text-base font-[600]">Player Registration Successful</h5>
      {/* Got to Main App */}
      <Button
        placeholder='Sponsor Tournament'
        ripple={true}
        className='text-red text-[0.875rem] font-[700] bg-[#FDF0D5] w-full h-[40px] rounded-[5px]'
      >
        Go to Main App
      </Button>
      {/* Sponsor Button */}
      <Button
        placeholder='Sponsor Tournament'
        ripple={true}
        className='text-white text-[0.875rem] bg-green w-[170px] h-[40px] rounded-[5px]'
      >
        Sponsor
      </Button>
    </div>
  );
}

export default RegistrationSuccessful