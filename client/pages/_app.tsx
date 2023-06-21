import { AuthContextProvider } from "@/hooks/useAuth";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import { SelectionsProvider } from "@/hooks/useNewWebsiteSelections";
import { AppProps } from "next/app";
import "../app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalDataProvider>
      <AuthContextProvider>
        <SelectionsProvider>
          <Component {...pageProps} />
        </SelectionsProvider>
      </AuthContextProvider>
    </GlobalDataProvider>
  );
}

export default MyApp;
