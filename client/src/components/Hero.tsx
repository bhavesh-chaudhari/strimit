import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
import { HeroBg1 } from "./svgs";
import Link from "next/link";
import Image from "next/image";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { useCurrentUser } from "../hooks/useUser";

const Hero = (): JSX.Element => {
  const containerRef = useRef<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true)

  const { data } = useCurrentUser();

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
    <div className="flex relative items-center overflow-hidden justify-center flex-col w-full">
      {/* <div className="absolute gradient w-[60%] h-24 md:h-32 z-0 -rotate-[10deg] -top-[5%] -left-[5%]"></div> */}
      <div
        ref={containerRef}
        className="overflow-hidden relative min-h-[calc(100vh-65px)] flex flex-col items-center pt-32 md:pt-[25vh] 2xl:pt-[30vh]"
      >
        <div className="md:-translate-y-8 flex flex-col items-center">
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
          <div className="gap-5 max-w-max flex justify-center">
            {loading ? (
              ""
            ) : (
              <>
                {!user?.id ? (
                  <Link
                    className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 leading-none flex items-center justify-center py-3 md:py-2 px-5 md:px-6 2xl:text-2xl md:text-xl text-md rounded-md"
                    href={"/signup"}
                    passHref
                  >
                    Signup Now
                  </Link>
                ) : (
                  ""
                )}
                {user?.id && user.role === "streamer" ? (
                  <Link
                    className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 leading-none flex items-center justify-center py-3 md:py-2 px-5 md:px-6 2xl:text-2xl md:text-xl text-md rounded-md"
                    href={"/streamer"}
                    passHref
                  >
                    Streamer QnA
                  </Link>
                ) : (
                  ""
                )}
                {user?.id && user.role === "advertiser" ? (
                  <Link
                    className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 leading-none flex items-center justify-center py-3 md:py-2 px-5 md:px-6 2xl:text-2xl md:text-xl text-md rounded-md"
                    href={"/advertiser"}
                    passHref
                  >
                    Quick Survey
                  </Link>
                ) : (
                  ""
                )}

                <Link
                  className="bg-white hover:shadow-blue-400 shadow-md hover:bg-gray-100 text-black border-2 transition-all duration-300 leading-none flex items-center justify-center py-3 md:py-2 2xl:text-2xl md:text-xl  px-5 md:px-6 text-md rounded-md"
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
