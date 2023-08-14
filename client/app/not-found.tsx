import { CircleBackGround } from "@/components/CircleBackGround";
import Link from "next/link";

const FourZeroFour = () => {
  return (
    <>
      <CircleBackGround />
      <main className="flex flex-col items-center mt-[10%] relative z-10">
        <p className="text-primaryOne text-6xl md:text-9xl font-bold">404</p>
        <h1 className="h2 md:h1">Page Not Found</h1>
        <p className="default-paragraph my-4 w-3/4 mx-auto text-center">
          Whoopsie daisy! Looks like you took a wrong turn somewhere. But don't
          worry, just think of this as a detour to adventure! Who knows what you
          might find along the way. In the meantime, why not check out our other
          pages or head back home?
        </p>
        <Link
          href="/"
          className="text-white text-sm rounded-full px-7 py-3 bg-primaryOne hover:bg-primaryOneLight"
        >
          Homepage
        </Link>
      </main>
    </>
  );
};

export default FourZeroFour;
