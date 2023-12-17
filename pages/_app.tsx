import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import celoGroups from "@celo/rainbowkit-celo/lists";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/Layout";
import { Urbanist } from "next/font/google";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ThemeProvider } from "@material-tailwind/react";
import "../styles/globals.css";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);

const connectors = celoGroups({
  chains,
  projectId: "a502cc611f5435a4e7d8c9cd6ecf890f",
});

const appInfo = {
  appName: "Games And Players Network",
};

const wagmiConfig = createConfig({
  connectors,
  publicClient: publicClient,
});

// const urbanist = Urbanist({
//   subsets: ["latin"],
//   display: "swap",
//   adjustFontFallback: false,
// });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
          <Provider store={store}>
            <ThemeProvider>
              {/* <div className={urbanist.className}> */}
              <Layout>
                <Component {...pageProps} />
              </Layout>
              {/* </div> */}
            </ThemeProvider>
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
