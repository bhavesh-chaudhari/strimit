import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
// import { HeroBg1 } from "./svgs";
import Link from "next/link";
import Image from "next/image";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { useCurrentUser } from "../hooks/useUser";
import AuthForm from "./auth/AuthForm";
import { Strimit } from "./svgs";
import clsx from "clsx";

const Hero = (): JSX.Element => {
  const containerRef = useRef<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { data } = useCurrentUser();

  useEffect(() => {
    const handleResize = () => {
      const deviceWidth = window.matchMedia("(max-width: 768px)");
      // containerRef.current.style.minHeight =
      //   (window as any).innerHeight - 65 + "px";
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading(false);
    setUser(getUserFromLocalStorage);
  }, [data]);

  return (
    <div className="min-h-[calc(100vh-100px)] pt-[100px] md:pt-0 md:min-h-0  md:mt-[15%] md:mb-10 lg:mt-0 lg:mb-0 lg:min-h-[calc(100vh-100px)] relative flex flex-col justify-center items-center">
      <div className="absolute w-[280px] h-[60px] bg-gradient-to-r from-yellow-200 to-fuchsia-400 -top-28 md:hidden"></div>
      <div
        className={clsx(
          "flex flex-col-reverse justify-start items-start md:flex-row relative md:justify-between md:items-center w-[88%] md:w-[90%] xl:w-[80%] -translate-y-[18%]",
          "pt-[25%] md:pt-0"
        )}
      >
        <div className="md:translate-y-[5%] text-center md:text-left flex flex-col justify-center w-full md:w-max">
          <div className="mb-8 flex justify-center md:block">
            <Strimit className="w-[90%] md:w-[250px] lg:w-[300px] xl:w-[400px]"></Strimit>
          </div>
          <div className="mb-6 md:mb-8 xl:mb-12">
            <h1 className="text-2xl md:text-3xl xl:text-6xl font-inter font-bold text-gray-800">
              Monetize Live <br className="hidden sm:flex" /> Streams
            </h1>
          </div>
          <div className="flex gap-4 w-full justify-center md:w-max">
            <Link
              href={"/signup"}
              className={clsx(
                "bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-16 text-2xl",
                "text-md px-6 py-2"
              )}
            >
              Signup
            </Link>
            <Link
              href={"/offer"}
              className={clsx(
                "bg-white transition-all hover:text-fuchsia-400 duration-200 text-fuchsia-600 border border-fuchsia-100 xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-12 text-2xl",
                "text-md px-6 py-2",
              )}
            >
              Pre Book
            </Link>
          </div>
        </div>
        <div className="relative min-h-[300px] md:min-h-0  flex justify-center items-center w-[100%] md:w-[58%]">
          <div className="absolute w-full md:mt-[8%] md:right-[-10%] z-0">
            <Image
              src={"/images/hero-mockup-4.png"}
              alt={"live hero mockup"}
              width={800}
              height={100}
              className="relative z-10 scale-110 md:scale-100"
              draggable={"false"}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
