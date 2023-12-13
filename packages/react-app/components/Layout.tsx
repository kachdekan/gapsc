import { FC, ReactNode } from "react";
import BackgroundSvg from "@/public/background-svg.svg";
import Topbar from "./topbar";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='relative bg-black min-h-screen w-full max-w-[390px] flex justify-center items-center overflow-hidden'>
      {/* <Header /> */}
      <div className='absolute w-full h-full'>
        <BackgroundSvg />
      </div>
      <div className='w-full relative flex flex-col items-center justify-start py-5 px-[7px] z-30'>
        <div className='fixed top-[25px] left-[16px]'>
          <Topbar />
        </div>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
