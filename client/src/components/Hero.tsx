import React from "react";
import styles from "../styles/Hero.module.scss"
import { HeroBg1 } from "./svgs";
import Link from "next/link";

const Hero = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["main"]}>
          <div className={styles["text"]}>
            <h1>
              Modern Day Advertising
              <br /> Made Simple with <span>Live</span>.<br />
            </h1>
          </div>
          <div className={styles["action"]}>
            <Link href={"/signup"} passHref>
              <a className={styles["signup-link"]} >Signup Now</a>
            </Link>
          </div>
        </div>
        <div className={styles["illustration"]}>
          <HeroBg1></HeroBg1>
        </div>
      </div>
    </div>
  );
};

export default Hero;