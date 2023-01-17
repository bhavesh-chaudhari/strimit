import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import clsx from "clsx";
import Link from "next/link";

const BrandsHomeMain = () => {
    //
    // const [isPlaying, setIsPlaying] = useState(false);
    //
    // const handleInterval = () => {
    //     setIsPlaying(!isPlaying);
    //     setTimeout(handleInterval, 30000);
    // }
    //
    //
    // const [url, setUrl] = useState('/videos/Countdown%203%20seconds%20timer%20-%201080.mp4');
    // const [intervalId, setIntervalId] = useState(null);
    //
    // useEffect(() => {
    //     if (!process.browser) {
    //         return;
    //     }
    //
    //     const interval = setTimeout(() => {
    //         let randomUrl = getRandomUrl()
    //         setUrl(randomUrl)
    //     }, 10000);
    //     setIntervalId(interval);
    //
    //     return () => clearTimeout(intervalId);
    // }, [url]);
    //
    // const getRandomUrl = () => {
    //     let urls = ['/videos/Countdown%203%20seconds%20timer%20-%201080.mp4']
    //     let randomIndex = Math.floor(Math.random() * urls.length)
    //     return urls[randomIndex]
    // }

    return (

        <div className="pt-[100px] mb-16 md:py-20 lg:py-0 md:min-h-0 md:mb-10 lg:mt-0 lg:mb-0 relative flex flex-col justify-center items-center 2xl:py-20">
            <Link
                href={"/signup"}
                className={clsx(
                    "mt-24 mb-2 bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full items-center xl:px-16 text-2xl",
                    "text-md px-6 py-2"
                )}
            >
                Signup
            </Link>
            <div className="md:flex">
                <div className="p-24">
                    <p className="block mt-0 ml-4 mb-4 mr-4 text-3xl leading-tight text-black box-decoration-clone">
                        <span className="md:text-7xl">
                          Live streams are
                        </span>{" "}&nbsp;
                        <span className="translate-x-0 text-fuchsia-600 font-bold md:text-8xl">
                          10 times
                        </span>{" "}
                        <span className="translate-x-0 md:text-7xl">
                            more engaging and interactive.
                        </span>
                    </p>

                    <p className="block mt-36 ml-4 mb-4 mr-4 text-3xl leading-tight text-black box-decoration-clone">
                        <span className="md:text-7xl">
                          Mid-tier influencers generated
                        </span>{" "}&nbsp;
                        <span className="translate-x-0 text-fuchsia-600 font-bold md:text-8xl">
                          4X
                        </span>{" "}
                        <span className="translate-x-0 md:text-7xl">
                            more live streaming viewing hours.
                        </span>
                    </p>

                    <p className="block mt-36 ml-4 mb-4 mr-4 text-3xl leading-tight text-black box-decoration-clone">
                        <span className="md:text-8xl text-fuchsia-600 font-bold">
                          2X
                        </span>{" "}
                        <span className="translate-x-0 md:text-7xl">
                            more Engagement, Impressions and Views.
                        </span>
                    </p>

                    <p className="block mt-36 ml-4 mb-4 mr-4 text-3xl leading-tight text-black box-decoration-clone">
                        <span className="md:text-7xl">
                          Generate
                        </span>{" "}
                        <span className="translate-x-0 md:text-8xl font-bold text-fuchsia-600">
                            2X ROAS
                        </span>{" "}&nbsp;
                        <span className="translate-x-0 md:text-7xl">
                            for your business,
                        </span>{" "}
                        <span className="translate-x-0 md:text-7xl">
                            and get more customers.
                        </span>
                    </p>
                    {/*<p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here*/}
                    {/*    are five ideas you can use to find your first customers.</p>*/}
                </div>
            </div>
            <Link
                href={"/signup"}
                className={clsx(
                    "mt-0 mb-20 bg-fuchsia-600 hover:bg-fuchsia-500 transition-all text-white xl:p-2 shadow-md shadow-fuchsia-300 rounded-full items-center xl:px-16 text-2xl",
                    "text-md px-6 py-2"
                )}
            >
                Signup
            </Link>
        </div>
    );
};

export default BrandsHomeMain;
