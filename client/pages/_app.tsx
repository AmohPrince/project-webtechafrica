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
            {/* <link
              rel="shortcut icon"
              href="/images/favicon.png"
              type="image/png"
            /> */}
            <link
              rel="shortcut icon"
              href="/images/favicon.ico"
              type="image/x-icon"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/favicon-16x16.png"
            />
          </Head>
        </SelectionsProvider>
      </AuthContextProvider>
    </GlobalDataProvider>
  );
}

export default MyApp;
