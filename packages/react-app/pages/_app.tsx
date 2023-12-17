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
import { ThemeProvider } from "@material-tailwind/react";

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);

const connectors = [new InjectedConnector({ chains })];

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
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
          <Provider store={store}>
            <ThemeProvider>
              <div className={urbanist.className}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </div>
            </ThemeProvider>
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
