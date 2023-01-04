import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import Head from "next/head";

const calendar = () => {

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    // script.onload = () => {
    //   setLoading(false);
    // };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Book A Demo - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=Book%20A%20Demo&path=www.strimit.in/login"
        ></meta>
      </Head>
      <div className="flex justify-center h-[calc(100vh-105px)] overflow-hidden">
        <div>
          {loading && (
            <div className="justify-center flex items-center w-full h-full absolute">
              <FadeLoader color="#d946ef" width={5} height={30}></FadeLoader>
            </div>
          )}
        </div>
        <div
          className="calendly-inline-widget min-w-[320px] w-full"
          data-url="https://calendly.com/team-strimit/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
          style={{ minWidth: "320px", height: "600px" }}
        ></div>
      </div>
    </>
  );
};

export default calendar;
