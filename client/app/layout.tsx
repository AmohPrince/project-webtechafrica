import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthContextProvider } from "@/hooks/useAuth";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import { SelectionsProvider } from "@/hooks/useNewWebsiteSelections";
import { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebTech Africa",
  description:
    "Create insanely beautiful websites that will spear head your business to the top of its specific niche.",
  twitter: {
    description:
      "Let the world best software engineers re-brand your online presence",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <GlobalDataProvider>
          <AuthContextProvider>
            <SelectionsProvider>
              <Navbar />
              {children}
              <Footer />
            </SelectionsProvider>
          </AuthContextProvider>
        </GlobalDataProvider>
      </body>
    </html>
  );
}

{
  /* <Head>
  <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
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
</Head>; */
}
