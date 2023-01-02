import React from "react";
import styles from "../../styles/howItWorks/HowItWorks.module.scss";
import { GiMoneyStack } from "react-icons/gi";
import { CiStreamOn } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { AiOutlineStock } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import Pattern from "../svgs/Pattern";
import Link from "next/link";
import { useUserTokenInfo } from "../../hooks/useUser";
import Image from "next/image";
import clsx from "clsx";
import Newsletter from "../Newsletter";

const HowItWorksMain = ({imageData}: any) => {

  const { id, role } = useUserTokenInfo();

  return (
    <div className="flex flex-col justify-center font-inter items-center pb-4">
      <div className="flex justify-center w-full md:shadow-inner pb-8 shadow-gray-100 md:pt-20 md:rounded-tl-[100px] xl:rounded-tl-[30%] 2xl:rounded-xl">
        <div className="w-[90%] md:w-[95%] lg:w-[90%] flex flex-col-reverse md:flex-row items-start">
          <div className="relative scale-110 md:scale-100 pb-20 md:pb-0 md:sticky top-16 flex flex-col items-center lg:w-[50%]">
            <Image
              className="z-10 relative"
              width={800}
              height={200}
              alt={"strimit.in signup mockup"}
              src={"/images/signup-mockup.png"}
              draggable={"false"}
            ></Image>
            <div className="absolute bg-gradient-to-l z-0 rotate-[70deg] blur-[150px] top-[20%] from-fuchsia-200 to-yellow-100 w-[400px] h-[170px] md:h-[30vh]"></div>
            <Link
              href={"/signup"}
              className="absolute rotate-[-23deg] rounded-xl rounded-tr-3xl bg-transparent w-[32%] cursor-pointer h-[80%] z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></Link>
          </div>
          <div className="md:w-[100%] lg:w-[50%]">
            <div>
              <div className="relative flex flex-col gap-12 md:gap-16 w-[100%]">
                <div>
                  <div className="relative before:from-fuchsia-400 before:to-orange-600">
                    <h2 className="text-3xl lg:text-5xl font-medium">
                      Are You A Streamer?
                    </h2>
                  </div>
                  <div className={`flex flex-col`}>
                    <div className="shadow-fuchsia-100 flex flex-col gap-6 md:gap-8 z-0 relative pt-6 md:pt-8">
                      <p className="text-2xl lg:text-3xl text-gray-700 box-decoration-clone">
                        <span className="text-3xl lg:text-4xl text-fuchsia-600 font-bold">
                          Increase
                        </span>{" "}
                        <span className="translate-x-0">
                          your earnings by displaying
                        </span>{" "}
                        <span className="translate-x-0 md:flex">
                          video/banner ads onto your streams
                        </span>
                        <span className="translate-x-0 md:flex">
                          taking into account that your audience
                        </span>{" "}
                        <span className="translate-x-0 md:flex">
                          doesn't get disturbed.
                        </span>
                      </p>
                      <p className="text-2xl lg:text-3xl text-gray-700">
                        <span className="text-4xl text-fuchsia-600 font-bold">
                          100%
                        </span>{" "}
                        <span className="translate-x-0">
                          authority over the ads you put
                        </span>{" "}
                        <span className="translate-x-0 md:flex">
                          {" "}
                          on your stream. We let you control your
                        </span>{" "}
                        <span className="translate-x-0 md:flex">
                          ads by choosing when you want to
                        </span>
                        <span className="translate-x-0 md:flex">
                          {" "}
                          advertise on your stream.
                        </span>
                      </p>
                      {!id && (
                        <div
                          className={clsx(
                            "bg-white w-max transition-all shadow-sm shadow-fuchsia-300 hover:text-fuchsia-700 duration-200 text-fuchsia-600 border border-fuchsia-100 p-2 rounded-full px-8 text-2xl",
                            "relative z-0"
                          )}
                        >
                          {!id && <Link href="/signup">Pre Book Now</Link>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative before:from-fuchsia-400 before:to-orange-600">
                    <h2 className="text-3xl lg:text-5xl font-medium">
                      Are You A Brand?
                    </h2>
                  </div>
                  <div className={`flex flex-col`}>
                    <div className="shadow-fuchsia-100 flex flex-col gap-6 md:gap-8 z-0 relative pt-6 md:pt-8">
                      <p className="text-2xl lg:text-3xl text-gray-700 box-decoration-clone">
                        <span className="text-3xl lg:text-4xl text-fuchsia-600 font-bold">
                          Grow
                        </span>{" "}
                        your business by reaching out to the already booming,
                        live-streaming industry audience.
                      </p>
                      <p className="text-2xl lg:text-3xl text-gray-700">
                        <span className="text-4xl text-fuchsia-600 font-bold">
                          Pay
                        </span>{" "}
                        only for the audience who viewed your ad, get complete
                        insights about your published ads on your dashboard.
                      </p>
                      {!id && (
                        <div
                          className={clsx(
                            "bg-white w-max transition-all shadow-sm shadow-fuchsia-300 hover:text-fuchsia-700 duration-200 text-fuchsia-600 border border-fuchsia-100 p-2 rounded-full px-8 text-2xl",
                            "relative z-0"
                          )}
                        >
                          {!id && <Link href="/signup">Signup</Link>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Newsletter></Newsletter>
                </div>
                <div className="md:pb-36 flex justify-center md:justify-start">
                  {!id && (
                    <Link
                      className="text-xl shadow-md transition-all bg-fuchsia-500 px-4 text-white py-2 rounded-sm"
                      href={"/signup"}
                    >
                      Pre-Book Studio Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksMain;

// Grow your business by reaching out to the already booming, live-streaming industry audience.
// Pay only for the audience who viewed your ad, get complete insights about your published ads on your dashboard.
