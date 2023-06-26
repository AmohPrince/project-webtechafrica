import { AuthContextProvider } from "@/hooks/useAuth";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import { SelectionsProvider } from "@/hooks/useNewWebsiteSelections";
import { AppProps } from "next/app";
import Head from "next/head";
import "../app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalDataProvider>
      <AuthContextProvider>
        <SelectionsProvider>
          <Component {...pageProps} />
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
          </Head>
        </SelectionsProvider>
      </AuthContextProvider>
    </GlobalDataProvider>
  );
}

export default MyApp;
