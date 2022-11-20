import React from "react";
import styles from "../../styles/howItWorks/HowItWorks.module.scss";
import {GiMoneyStack} from "react-icons/gi"
import {CiStreamOn} from "react-icons/ci"
import {VscWorkspaceTrusted} from "react-icons/vsc"
import {AiOutlineStock} from "react-icons/ai"
import {GiPayMoney} from "react-icons/gi"
import { Pattern } from "../svgs";
import Link from "next/link";

const HowItWorksMain = () => {
  return (
    <div className="flex justify-center items-center pb-12">
      <div className="w-[90%]">
        <div className="mb-6 relative before:absolute before:-translate-x-1/2 before:-translate-y-[110%] before:left-1/2 before:w-[1px] before:h-52 md:before:h-44 before:bg-gradient-to-t before:from-blue-600 before:to-black">
          <h2 className="text-center text-3xl font-bold">
            Are you a streamer?
          </h2>
        </div>
        <div className="mb-12">
          <div className={`flex flex-col md:flex-row gap-4 mb-4`}>
            <div className="rounded shadow-sm shadow-blue-300 flex-1 z-10 overflow-hidden p-4 relative border border-blue-400">
              <div className="mb-2 w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center border border-blue-300">
                <GiMoneyStack size={27}></GiMoneyStack>
              </div>
              <div className={``}>
                <p className="leading-5">
                  <span className="text-2xl font-bold">Increase</span> your
                  earnings by displaying video/banner ads of onto your streams
                  taking into account that your audience doesn't get disturbed.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.18]">
                <Pattern></Pattern>
              </div>
            </div>
            <div className="rounded shadow-sm shadow-blue-300 flex-1 z-10 overflow-hidden p-4 relative border border-blue-400">
              <div className={styles["icon"]}>
                <VscWorkspaceTrusted size={20}></VscWorkspaceTrusted>
              </div>
              <div className={styles["note"]}>
                <p className="leading-5">
                  <span className="text-2xl font-bold">100%</span> authority
                  over the ads you put on your stream. We let you control your
                  ads by choosing when you want to advertise on your stream.
                </p>
              </div>
              <div className={styles["pattern"]}>
                <Pattern></Pattern>
              </div>
            </div>
          </div>
          <div className={styles["points"]}>
            <h3 className="text-center py-1">How it works?</h3>
            <ul>
              <li>Show the banner image/ video ad during your live stream.</li>
              <li>Get ₹1 for every view count</li>
            </ul>
          </div>
          <div className={styles["cta"]}>
            <Link href="/signup">Sign me Up</Link>
          </div>
        </div>
        <div className="mb-6 relative pt-40 before:absolute before:-translate-x-1/2 before:-translate-y-[110%] before:left-1/2 before:w-[1px] before:h-44 before:bg-gradient-to-t before:from-orange-600 before:to-black">
          <h2 className="text-center text-3xl font-bold">
            Are you an advertiser?
          </h2>
        </div>
        <div className={styles["content"]}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="rounded shadow-sm shadow-blue-300 flex-1 z-10 overflow-hidden p-4 relative border border-blue-400">
              <div className={styles["icon"]}>
                <AiOutlineStock size={27}></AiOutlineStock>
              </div>
              <div className={styles["note"]}>
                <p className="leading-5">
                  <span className="text-2xl font-bold">Grow</span> your business
                  by reaching out to the already booming, live-streaming
                  industry audience.
                </p>
              </div>
              <div className={styles["pattern"]}>
                <Pattern></Pattern>
              </div>
            </div>
            <div className="rounded shadow-sm shadow-blue-300 flex-1 z-10 overflow-hidden p-4 relative border border-blue-400">
              <div className={styles["icon"]}>
                <GiPayMoney size={22}></GiPayMoney>
              </div>
              <div className={styles["note"]}>
                <p className="leading-5">
                  <span className="text-2xl font-bold">Pay</span> only for the
                  audience who viewed your ad, get complete insights about your
                  published ads on your dashboard.
                </p>
              </div>
              <div className={styles["pattern"]}>
                <Pattern></Pattern>
              </div>
            </div>
          </div>
          <div className={`${styles["points"]}`}>
            <h3 className="text-center py-1">How it works?</h3>
            <ul>
              <li>
                We have a dedicated segment of the audience who watch live
                streams.
              </li>
              <li>No work excpet uploading image/video files</li>
              <li>You only pay when someone watches your ad.</li>
              <li>We guarantee a 100% impression of your ad to the viewer.</li>
              <li>Moreover it's only ₹1 per view count. </li>
            </ul>
            {/* <p className="text-sm">*T&C applied.</p> */}
          </div>
          <div className={styles["cta"]}>
            <Link href="/signup">Advertise with us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksMain;
