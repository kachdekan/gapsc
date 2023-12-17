"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useConnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { InjectedConnector } from "wagmi/connectors/injected";

const Topbar = () => {
  const { push } = useRouter();

  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  // Connect Minipay Wallet automatically and hide connect wallet button when app is used on minipay
  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect();
    }
  }, []);

  return (
    <div className=' flex items-center justify-between'>
      {/* Logo */}
      <div onClick={() => push("/")}>
        <Image src='/GAP-logo.png' width={40} height={29} alt='logo' />
      </div>

      {/* Connect Wallet */}
      {!hideConnectBtn && <ConnectButton />}
    </div>
  );
};

export default Topbar;
