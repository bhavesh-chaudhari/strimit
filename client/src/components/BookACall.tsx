import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {IoLogoWhatsapp} from "react-icons/io5"

const BookACall = () => {
  const router = useRouter();

  const links = ["/streamer", "/advertiser", "/book-a-demo"];

  if (links.includes(router.pathname)) {
    return <></>;
  }

  return (
    <a
      // className="fixed shadow-[2px_2px_10px_0px_white] md:right-[10%] 2xl:right-[calc(((100vw-1600px)/2)+40px)] bottom-6 right-6 md:bottom-8 hover:scale-110 duration-200 transition-transform border-green-500 rounded-md text-green-500 border-4 bg-white z-50 p-2"
      href="https://wa.me/+918080915513"
      target={"_blank"}
      rel="noreferrer"
      className="fixed group  bottom-4 md:bottom-6 md:right-6 group right-4 flex z-50 items-center justify-center gap-2"
    >
      {/*<span className="text-green-500 hidden sm:flex font-semibold shadow-[0px_0px_10px_0px_white] py-1 bg-green-100 px-2 rounded-sm relative after:absolute after:h-0 after:w-0 after:border-transparent after:right-0 after:top-1/2 after:translate-x-[85%] after:-translate-y-1/2 after:border-l-8 after:border-l-green-100 after:border-t-8 after:border-b-8">*/}
      {/*  +91-8080915513*/}
      {/*</span>*/}
      <span className="bg-green-500 group-hover:scale-110 duration-200 group-hover:shadow-[0px_0px_10px_0px_rgba(0,255,0,1)] text-white w-12 h-12 flex items-center justify-center rounded-full">
        {/* <FaCalendarAlt size={21}></FaCalendarAlt> */}
        <IoLogoWhatsapp size={35}></IoLogoWhatsapp>
      </span>
    </a>
  );
};

export default BookACall;
