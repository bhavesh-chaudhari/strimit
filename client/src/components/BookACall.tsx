import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BookACall = () => {
  const router = useRouter();

  const links = ["/streamer", "/advertiser", "/book-a-demo"];

  if (links.includes(router.pathname)) {
    return <></>
  }

  return (
    <Link
      className="fixed shadow-[2px_2px_10px_0px_white] md:right-[10%] 2xl:right-[calc(((100vw-1600px)/2)+40px)] bottom-6 right-6 md:bottom-8 hover:scale-110 duration-200 transition-transform border-green-500 rounded-md text-green-500 border-4 bg-white z-50 p-2"
      href="/book-a-demo"
    >
      Book a Demo
      {/* <span className="flex absolute h-3 w-3 top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 opacity-80"></span>
      </span> */}
    </Link>
  );
};

export default BookACall;
