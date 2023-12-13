"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Topbar = () => {          
  const { push } = useRouter();

  return (
    <div className='w-full flex items-center justify-start'>
      <div onClick={() => push("/")}>
        <Image src="/GAP-logo.png" width={40} height={29} alt='logo' />
      </div>
    </div>
  );
};

export default Topbar;
