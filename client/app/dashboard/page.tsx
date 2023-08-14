import NewWebsite from "@/components/dashboard/newwebsiteslides/new-website";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Access your client dashboard and checkout your websites or create a new one!",
  title: "dashboard",
  twitter: {
    description:
      "Access your client dashboard and checkout your websites or create a new one!",
  },
};

const page = () => {
  // const { setDashBoardTitleInfo } = useGlobalData();

  // useEffect(() => {
  //   setDashBoardTitleInfo({
  //     h1: "New Website",
  //     sub: "Lets get you hooked up with a website!",
  //   });
  // }, [setDashBoardTitleInfo]);

  return <NewWebsite />;
};

export default page;
