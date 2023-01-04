import React, { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import styles from "../styles/StreamerForm.module.scss";
import { FadeLoader } from "react-spinners";

const StreamerForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;

    script.onload = () => {
      setLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Streamer's Form - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=Streamr's%20Form&path=www.strimit.in/streamer"
        ></meta>
      </Head>
      <div>
        {loading && (
          <div className="justify-center flex items-center w-full h-full absolute">
            <FadeLoader color="#d946ef" width={5} height={30}></FadeLoader>
          </div>
        )}
      </div>
      <div className={styles["container"]}>
        <iframe
          data-tally-src="https://tally.so/r/w5B0AQ?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="STREAMERS"
        ></iframe>
      </div>
    </>
  );
};

export default StreamerForm;
