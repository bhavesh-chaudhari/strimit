import React, { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import styles from "../styles/StreamerForm.module.scss";
import { FadeLoader } from "react-spinners";

const StreamerForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const script = document.createElement("script");

    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;

    script.onload = ()=>{
          setLoading(false);
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <>
      <Head>
        <title>Advertiser's Form - Strimit</title>
      </Head>
      <div className={styles["container"]}>
        <div>
          {loading && (
            <div className="justify-center flex items-center w-full h-full absolute">
              <FadeLoader color="#d946ef" width={5} height={30}></FadeLoader>
            </div>
          )}
        </div>
        <iframe
          data-tally-src="https://tally.so/r/wb5R0Z?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="ADVERTISERS"
        ></iframe>
      </div>
    </>
  );
};

export default StreamerForm;
