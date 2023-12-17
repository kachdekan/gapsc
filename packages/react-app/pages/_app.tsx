import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
// import celoGroups from "@celo/rainbowkit-celo/lists";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/Layout";
import { Urbanist } from "next/font/google";
import "../styles/globals.css";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string; // get one at https://cloud.walletconnect.com/app

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);

const connectors = [new InjectedConnector({ chains })];

// const connectors = celoGroups({
//   chains,
//   projectId,
//   appName:
//     (typeof document === "object" && document.title) ||
//     "Games And Players Network",
// });

const appInfo = {
  appName: "Games And Players Network",
};

const wagmiConfig = createConfig({
  connectors: connectors,
  publicClient: publicClient,
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
      <WagmiConfig config={wagmiConfig}>
        <Provider store={store}>
          <div className={urbanist.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </Provider>
      </WagmiConfig>
    </RainbowKitProvider>
  );
}

export default App;
