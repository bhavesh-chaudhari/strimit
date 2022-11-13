import React from "react";
import styles from "../styles/Hero.module.scss";
import { HeroBg1 } from "./svgs";
import Link from "next/link";

const Hero = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="-translate-y-8 mt-40">
        <div>
          <h1 className="text-center mb-4 text-7xl uppercase font-bold">
            Live
          </h1>
          <h2 className="text-center mb-6 text-3xl">
            The way of advertising for live streams.
          </h2>
          <div className="flex gap-2 text-6xl">
            <div className="flex gap-2">
              <span className="relative leading-[1] block before:animate-[firstWhiteText_8s_infinite] before:leading-[1] before:content-['Profitable.'] before:block before:absolute before:text-white before:pointer-events-none before:w-full font-bold">
                <span className="bg-gradient-to-r  animate-[firstGradient_8s_infinite] from-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Profitable.
                </span>
              </span>
              <span className="relative leading-[1] block before:animate-[secondWhiteText_8s_infinite] before:leading-[1] before:content-['Simple.'] before:block before:absolute before:text-white before:pointer-events-none before:w-full font-bold">
                <span className="bg-gradient-to-r animate-[secondGradient_8s_infinite] from-orange-500 to-pink-500 text-transparent bg-clip-text">
                  Simple.
                </span>
              </span>
              <span className="relative leading-[1] block before:animate-[thirdWhiteText_8s_infinite] before:leading-[1] before:content-['Reliable.'] before:block before:absolute before:text-white before:pointer-events-none before:w-full font-bold">
                <span className="bg-gradient-to-r animate-[thirdGradient_8s_infinite] from-green-500 to-blue-500 text-transparent bg-clip-text">
                  Reliable.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 gap-5 flex justify-center">
          <Link href={"/signup"} passHref>
            <a className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 py-2 px-6 text-lg rounded-md">
              Signup Now
            </a>
          </Link>
          <Link href={"/signup"} passHref>
            <a className="bg-white text-black border-2 border-blue-400 py-2 px-6 text-lg rounded-md">
              Calculate
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
