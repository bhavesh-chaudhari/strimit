import React from "react";

const AboutMain = () => {
  return (
    <div className="flex flex-col py-[140px] p-4 md:py-16 justify-center items-center">
      <div className="absolute bg-gradient-to-l z-0 rotate-[0] blur-[200px] -top-[20%] opacity-80 from-fuchsia-200 to-yellow-200 w-[40%] h-[300px] md:h-[30vh]"></div>
      <h1 className="text-center text-4xl font-bold z-[5]">About Us</h1>
      <div className="w-[90%] z-[5] text-center lg:w-1/2 mt-6 md:mt-8 flex justify-center items-center gap-4 flex-col text-lg md:text-2xl">
        <p>
          We want to make live-streaming the go-to industry standard for content
          creators.
          <br />
          The best way to achieve that is what we do at STRIMIT.
          <br />
          We help streamers earn money from their live streams.
          <br />
          All they have to do is roll a video/display an image.
          <br />
          <br />
          Video/Image provided by advertisers is all they need to upload.
          <br />
          No hassle, no work.
          <br />
          It is a 1-step solution for advertisers to get to their target
          audience via content.
          <br />
          <br />
          <p  className="font-semibold" >JOIN STRIMIT.</p>
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutMain;
