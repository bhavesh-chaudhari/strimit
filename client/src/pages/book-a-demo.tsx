import React, { useEffect } from "react";

const calendar = () => {
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
      <div className="flex justify-center h-[calc(100vh-105px)] overflow-hidden">
        <div
          className="calendly-inline-widget min-w-[320px] w-full"
          data-url="https://calendly.com/team-live/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
          style={{ minWidth: "320px", height: "600px" }}
        ></div>
      </div>
    </>
  );
};

export default calendar;
