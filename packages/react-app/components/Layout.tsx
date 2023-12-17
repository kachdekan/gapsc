import { FC, ReactNode } from "react";
import BackgroundSvg from "@/public/background-svg.svg";
import Topbar from "./topbar";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  
  return (
    <div className='relative bg-black min-h-screen w-full max-w-[760px] flex justify-center items-center overflow-hidden'>
      <div className='absolute w-full h-full'>
        <BackgroundSvg />
      </div>
      <div className='w-full relative flex flex-col items-center justify-start py-5 px-[7px] z-30'>
        <div className='max-w-[760px] fixed top-[25px] left-[16px] right-[16px]'>
          {/* <Topbar /> */}
        </div>

        <main className="mt-[35px]">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
