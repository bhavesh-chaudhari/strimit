import React from "react";
import styles from "../../styles/howItWorks/HowItWorks.module.scss";
import {GiMoneyStack} from "react-icons/gi"
import {CiStreamOn} from "react-icons/ci"
import {VscWorkspaceTrusted} from "react-icons/vsc"
import {AiOutlineStock} from "react-icons/ai"
import {GiPayMoney} from "react-icons/gi"
import { Pattern } from "../svgs";

const HowItWorksMain = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["heading"]}>
          <h2>Are you a streamer?</h2>
        </div>
        <div className={styles["content"]}>
          <div className={styles["main"]}>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <GiMoneyStack size={27}></GiMoneyStack>
              </div>
              <div className={styles["note"]}>
                <p>
                  <span>Increase</span> your earnings by displaying video ads of
                  just 30 seconds onto your streams taking into account that
                  your audience doesn't get disturbed.
                </p>
              </div>
              <div className={styles["pattern"]}>
                <Pattern></Pattern>
              </div>
            </div>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <VscWorkspaceTrusted size={20}></VscWorkspaceTrusted>
              </div>
              <div className={styles["note"]}>
                <p>
                  <span>100%</span> authority over the ads you put on your
                  stream. We let you control your ads by choosing when you want
                  to advertise on your stream.
                </p>
              </div>
              <div className={styles["pattern"]}>
                <Pattern></Pattern>
              </div>
            </div>
          </div>
          <div className={styles["points"]}>
            <h3>How it works?</h3>
            <ul>
              <li>Press a button twice every hour to show an ad.</li>
              <li>Get ₹1 for every view count*</li>
            </ul>
            <p>*T&C applied.</p>
          </div>
          <div className={styles["cta"]}>
            <a href="">Sign me Up</a>
          </div>
        </div>
        <div className={styles["heading"]}>
          <h2>Are you an Advertiser?</h2>
        </div>
        <div className={styles["content"]}>
          <div className={styles["main"]}>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <AiOutlineStock size={27}></AiOutlineStock>
              </div>
              <div className={styles["note"]}>
                <p>
                  <span>Grow</span> your business by reaching out to the already
                  booming, live-streaming industry audience.
                </p>
              </div>
              <div className={styles["pattern"]}>
                <Pattern></Pattern>
              </div>
            </div>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <GiPayMoney size={22}></GiPayMoney>
              </div>
              <div className={styles["note"]}>
                <p>
                  <span>Pay</span> only for the audience who viewed your ad, get
                  complete insights about your published ads on your dashboard.
                </p>
              </div>
              <div className={styles["pattern"]}>
                <Pattern></Pattern>
              </div>
            </div>
          </div>
          <div className={styles["points"]}>
            <h3>How it works?</h3>
            <ul>
              <li>
                We have a dedicated segment of the audience who watch gaming
                live streams.
              </li>
              <li>
                You provide us with your 30-second ad and we will display it
                every 30 minutes
              </li>
              <li>
                You only pay when someone watches your ad and the view count
                goes up.
              </li>
              <li>We guarantee a 100% impression of your ad to the viewer.</li>
              <li>Moreover it's only ₹1 per view count. </li>
            </ul>
            <p>*T&C applied.</p>
          </div>
          <div className={styles["cta"]}>
            <a href="">Advertise with us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksMain;