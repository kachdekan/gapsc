import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import celoGroups from "@celo/rainbowkit-celo/lists";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/Layout";
import { Urbanist } from "next/font/google";
import "../styles/globals.css";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string; // get one at https://cloud.walletconnect.com/app

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);

const connectors = celoGroups({
  chains,
  projectId,
  appName:
    (typeof document === "object" && document.title) ||
    "Games And Players Network",
});

const appInfo = {
  appName: "Games And Players Network",
};

const wagmiConfig = createConfig({
  connectors,
  publicClient: publicClient,
});

const urbanist = Urbanist({ subsets: ["latin"] });


function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
        <div className={urbanist.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
