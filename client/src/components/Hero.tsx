import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
import { HeroBg1 } from "./svgs";
import Link from "next/link";
import Image from "next/image";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { useUser } from "../hooks/useUser";

const Hero = (): JSX.Element => {
  const containerRef = useRef<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true)

  const { data } = useUser();

  useEffect(() => {
    const handleResize = () => {
      const deviceWidth = window.matchMedia("(max-width: 768px)");
      containerRef.current.style.minHeight =
        (window as any).innerHeight - 65 + "px";
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading(false)
    setUser(getUserFromLocalStorage);
  }, [data]);

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div
        ref={containerRef}
        className="overflow-hidden min-h-[calc(100vh-65px)] flex flex-col items-center pt-32 md:pt-[25vh] 2xl:pt-[30vh]"
      >
        <div className="md:-translate-y-8">
          <div className="w-full mb-8 flex flex-col items-center">
            <div className="mb-2 md:mb-6 2xl:mb-8 w-[100px] md:w-[150px] h-[60px] 2xl:w-[180px] relative flex justify-center items-center">
              <Image
                src={"/logos/live.svg"}
                layout={"fill"}
                alt={"Livestream.ads Logo"}
              ></Image>
            </div>
            <h2 className="text-center mb-6 text-2xl md:text-3xl 2xl:text-4xl">
              Advertise your live streams
            </h2>
            <div className="flex gap-2 text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl">
              <div className="flex flex-wrap px-2 gap-2 justify-center items-center w-full">
                <span className="relative leading-[1] block before:animate-[firstWhiteText_6s_infinite] before:leading-[1] before:content-['0%_Commissions.'] before:inline-block before:text-center before:absolute before:text-white before:pointer-events-none before:w-full font-bold">
                  <span className="bg-gradient-to-r text-center inline-block  animate-[firstGradient_6s_infinite] from-green-500 to-blue-500 text-transparent bg-clip-text">
                    0% Commissions.
                  </span>
                </span>
                <span className="relative leading-[1] block before:animate-[secondWhiteText_6s_infinite] before:leading-[1] before:content-['100%_Impressions.'] before:inline-block before:text-center before:absolute before:text-white before:pointer-events-none before:w-full font-bold">
                  <span className="bg-gradient-to-r text-center inline-block animate-[secondGradient_6s_infinite] from-orange-500 to-pink-500 text-transparent bg-clip-text">
                    100% Impressions.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="gap-5 flex justify-center">
            {loading ? (
              ""
            ) : (
              <>
                {!user?.id ? (
                  <Link
                    className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 leading-none flex items-center justify-center py-3 md:py-3 px-5 md:px-6 2xl:text-2xl text-lg rounded-md"
                    href={"/signup"}
                    passHref
                  >
                    Signup Now
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  className="bg-white shadow-blue-400 shadow-md hover:bg-gray-200 text-black border-2 transition-all duration-300 leading-none flex items-center justify-center py-3 md:py-3 2xl:text-2xl  px-5 md:px-6 text-lg rounded-md"
                  href={"/calculator"}
                  passHref
                >
                  Calculate
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
