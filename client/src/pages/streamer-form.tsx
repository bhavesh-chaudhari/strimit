import React, { useState } from "react";
import Script from "next/script";
import Head from "next/head";
import styles from "../styles/StreamerForm.module.scss";

const StreamerForm = () => {
  const [loading, setLoading] = useState(true);

 

  return (
    <>
      <Head>
        <style type="text/css"></style>
      </Head>
      <div className={styles["container"]}>
        {loading && (
          <div className={styles["loader"]}>
            <h1>Loading</h1>
          </div>
        )}
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
      <Script
        id="streamer-form"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("script loaded");
          setLoading(false);
        }}
        src="https://tally.so/widgets/embed.js"
      ></Script>
    </>
  );
};

export default StreamerForm;
