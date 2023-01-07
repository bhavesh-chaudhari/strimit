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
import dynamic from "next/dynamic";

const MediaQuery = dynamic(()=>{
  return import("react-responsive")
}, {
  ssr: false
})

const initialFormValues = {
  email: "",
  password: "",
  role: "",
};

export interface FormValues {
  email: string;
  password: string;
  role?: string;
}

const Hero = ({imageData}: any): JSX.Element => {

  const containerRef = useRef<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

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
    <div
      className={clsx(
        "pt-[100px] mb-16 md:py-20 lg:py-0 md:min-h-0 md:mb-10 lg:mt-0 lg:mb-0 relative flex flex-col justify-center items-center",
        !loading && user?.id && "lg:min-h-[calc(100vh-100px)]",
        !loading && !user?.id && "lg:min-h-[0]"
      )}
    >
      <div className="absolute w-[280px] h-[60px] bg-gradient-to-r from-yellow-200 to-fuchsia-400 -top-28 md:hidden"></div>
      <div
        className={clsx(
          "flex justify-start items-start relative lg:justify-between md:items-center w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[100%]",
          "lg:pt-0",
          !loading && !user?.id && "flex-col pt-[8vh] lg:flex-row",
          !loading &&
            user?.id &&
            "flex-col-reverse pt-[3vh] md:flex-row lg:-translate-y-[18%]"
        )}
      >
        <div
          className={clsx(
            "text-center lg:text-left flex flex-col justify-center w-full md:w-max",
            !loading && !user?.id && "md:-translate-y-[10%]",
            !loading && user?.id && "md:translate-y-[5%]"
          )}
        >
          <MediaQuery minWidth={768}>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset={-500}
              className="mb-10 flex justify-center lg:block"
            >
              <Strimit className="w-[90%] max-w-[300px] md:max-w-none md:w-[250px] lg:w-[300px] xl:w-[400px] 2xl:w-[23vw]"></Strimit>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="mb-6 md:mb-8 xl:mb-12"
            >
              <h1 className="text-2xl md:text-3xl xl:text-6xl font-inter font-bold text-gray-800">
                Sponsor Live <br className="hidden sm:flex" /> Streams
              </h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-offset={-200}
              className="flex gap-4 w-full justify-center md:w-max"
            >
              {
                <>
                  {" "}
                  <Link
                    href={"/offers"}
                    className={clsx(
                      "bg-white transition-all hover:text-fuchsia-400 duration-200 text-fuchsia-600 border border-fuchsia-100 xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-12 text-2xl",
                      "text-md px-6 py-2"
                    )}
                  >
                    Pre Book
                  </Link>
                  {!loading && !user?.id ? (
                    <Link
                      href={"/signup"}
                      className={clsx(
                        "bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-16 text-2xl",
                        "text-md px-6 py-2"
                      )}
                    >
                      Signup
                    </Link>
                  ) : data?.role === "streamer" ? (
                    <Link
                      href={"/streamer"}
                      className={clsx(
                        "bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-16 text-2xl",
                        "text-md px-6 py-2"
                      )}
                    >
                      Survey
                    </Link>
                  ) : (
                    <Link
                      href={"/advertiser"}
                      className={clsx(
                        "bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-16 text-2xl",
                        "text-md px-6 py-2"
                      )}
                    >
                      Survey
                    </Link>
                  )}
                </>
              }
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              className="mb-10 flex justify-center md:block"
            >
              <Strimit className="w-[90%] max-w-[300px] md:max-w-none md:w-[250px] lg:w-[300px] xl:w-[400px] 2xl:w-[23vw]"></Strimit>
            </div>
            <div data-aos-duration="900" className="mb-6 md:mb-8 xl:mb-12">
              <h1 className="text-2xl md:text-3xl xl:text-6xl font-inter font-bold text-gray-800">
                Monetize Live <br className="hidden sm:flex" /> Streams
              </h1>
            </div>
            <div
              data-aos-duration="1100"
              className="flex gap-4 w-full justify-center md:w-max"
            >
              {
                <>
                  {" "}
                  <Link
                    href={"/offers"}
                    className={clsx(
                      "bg-white transition-all hover:text-fuchsia-400 duration-200 text-fuchsia-600 border border-fuchsia-100 xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-12 text-2xl",
                      "text-md px-6 py-2"
                    )}
                  >
                    Pre Book
                  </Link>
                  {!loading && !user?.id ? (
                    <Link
                      href={"/signup"}
                      className={clsx(
                        "bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-16 text-2xl",
                        "text-md px-6 py-2"
                      )}
                    >
                      Signup
                    </Link>
                  ) : data?.role === "streamer" ? (
                    <Link
                      href={"/streamer"}
                      className={clsx(
                        "bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-16 text-2xl",
                        "text-md px-6 py-2"
                      )}
                    >
                      Survey
                    </Link>
                  ) : (
                    <Link
                      href={"/advertiser"}
                      className={clsx(
                        "bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full xl:px-16 text-2xl",
                        "text-md px-6 py-2"
                      )}
                    >
                      Survey
                    </Link>
                  )}
                </>
              }
            </div>
          </MediaQuery>
        </div>
        <div className="relative min-h-[300px] md:min-h-0  flex justify-center items-center w-[100%] md:w-[58%] 2xl:scale-110">
          {!loading && user?.id ? (
            <div className="absolute overflow-hidden max-w-[350px] md:max-w-none w-full md:mt-[8%] md:right-[-10%] z-0">
              <Image
                src={"/images/hero-mockup-7.png"}
                alt={"live hero mockup"}
                width={800}
                height={100}
                className="relative z-10 scale-110 md:scale-100"
                draggable={"false"}
              ></Image>
            </div>
          ) : (
            <div className="w-full flex justify-center md:justify-end items-center rounded-b-3xl mt-12 md:mt-0">
              <div className="md:py-12 flex flex-col justify-center items-center w-full max-w-[550px]">
                <h2 className="text-2xl text-fuchsia-500 font-bold text-center mb-4">
                  Signup Now
                </h2>
                <AuthForm
                  setFormValues={setFormValues}
                  formValues={formValues}
                  isSignUp={true}
                ></AuthForm>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
