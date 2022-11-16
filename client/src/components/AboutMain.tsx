import React from "react";

const AboutMain = () => {
  return (
    <div className="flex flex-col p-4 py-10 justify-center items-center">
      <h1 className="text-center text-4xl font-bold">About Us</h1>
      <div className="w-[90%] text-center lg:w-1/2 mt-6 md:mt-8 flex gap-4 flex-col text-lg md:text-2xl">
        <p>
          We want to make live-streaming the go-to industry standard for content
          creators. The best way to achieve that is what we do at LIVE. We help
          streamers earn extra cash from their live streams. All they have to do
          is roll a video/display an image.
        </p>
        <p>
          Video/Image provided by advertisers is all they need to upload except
          for paying the streamers. It is a 1-step solution for advertisers to
          get to their target audience via content. LIVE is the future. We’re
          LIVE.
        </p>
      </div>
    </div>
  );
};

export default AboutMain;
