import { Button } from "@material-tailwind/react";
import React from "react";

const InputIGN = () => {
  return (
    <form className='flex flex-col items-center gap-y-[32px]'>
      <input
        type='text'
        placeholder="Input IGN"
        className='bg-transparent w-full text-center text-white text-[0.87] font-[700] px-[12px] py-[12px] border-[1px] border-red rounded-[5px]'
      />

      <Button
        placeholder='Sponsor Tournament'
        ripple={true}
        className='text-white text-[0.875rem] bg-red w-[170px] h-[40px] rounded-[5px]'
      >
        Continue
      </Button>
    </form>
  );
};

export default InputIGN;
