import { useEffect, useState, FC, ReactNode } from "react";
import BackgroundSvg from "@/public/background-svg.svg";
import Topbar from "./topbar";
import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect();
    }
  }, [connect]);
  return (
    <div className='relative bg-black min-h-screen w-full max-w-[760px] flex justify-center items-center overflow-hidden'>
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
