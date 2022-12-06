import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex pt-40 items-center justify-center pb-16">
      <div className="w-[90%] flex flex-col justify-center items-center">
        <div className="mb-6 relative before:absolute before:-translate-x-1/2 before:-translate-y-[110%] before:left-1/2 before:w-[1px] before:h-52 md:before:h-44 before:bg-gradient-to-t before:from-green-600 before:to-black">
          <h2 className="text-center text-3xl font-bold">Newsletter</h2>
        </div>
        <div className="border-gray-500 max-w-xl mt-6 relative border p-4">
          <span className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white text-green-500 w-10 h-10 rounded-full">
            <AiOutlineMail size={24}></AiOutlineMail>
          </span>
          <span>
            Keep up with our latest news and events. Subscribe to our newletter.
          </span>
          <form onSubmit={handleSubmit}>
            <input name="email" id="email" type="email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
