import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useSubscribe } from "../hooks/useSubscibe";
import { PulseLoader } from "react-spinners";
import { IoMdCheckmark } from "react-icons/io";
import clsx from "clsx";

const Newsletter = () => {
  const [email, setEmail] = useState<null | string>(null);
  const { isLoading, data, mutate: subscribe } = useSubscribe();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    // subscribe email
    subscribe(email);
  };

  return (
    <div className="flex pt-40 items-center justify-center pb-40">
      <div className="w-[90%] flex flex-col justify-center items-center">
        <div className="mb-6 relative before:absolute before:-translate-x-1/2 before:-translate-y-[110%] before:left-1/2 before:w-[1px] before:h-52 md:before:h-44 before:bg-gradient-to-t before:from-green-600 before:to-black">
          <h2 className="text-center text-3xl font-bold">Newsletter</h2>
        </div>
        <div className="border-gray-500 max-w-xl mt-4 relative border p-4 rounded-md">
          <span className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white text-green-500 w-10 h-10 rounded-full">
            <AiOutlineMail size={24}></AiOutlineMail>
          </span>
          <p className="mt-4">
            Keep up with our latest news and events. Subscribe to our newletter.
          </p>
          <form
            className="mt-4 flex flex-col md:flex-row gap-3 md:gap-2"
            onSubmit={handleSubmit}
          >
            <input
              className="text-black outline-none focus:border-green-500 border-transparent transition-all duration-200 border-[2px] md:w-[70%] p-2 rounded-sm"
              onChange={(e: any) => setEmail(e.target.value)}
              name="email"
              id="email"
              type="email"
              required
              autoComplete="false"
            />
            <button
              className={clsx(
                "p-2 md:w-[30%] bg-green-500 rounded-sm outline-none cursor-pointer",
                (data?.status === 200) &&
                  "cursor-not-allowed"
              )}
              disabled={data?.status === 200}
            >
              {isLoading ? (
                <span>
                  <PulseLoader size={10} color="white"></PulseLoader>
                </span>
              ) : (
                <span className="flex leading-none justify-center items-center gap-1">
                  {data?.status === 200 ? (
                    <>
                      Subscribed{" "}
                      <span className="text-white flex">
                        <IoMdCheckmark size={18}></IoMdCheckmark>
                      </span>
                    </>
                  ) : (
                    <>Subscribe</>
                  )}
                </span>
              )}
            </button>
          </form>
          <div className="mt-3">
            {data?.status === 201 ? (
              <p className="text-green-400">Already Subscribed</p>
            ) : null}
            {/* {data?.status === 200 ? (
              <p className="flex items-center gap-1">
                Subscribed{" "}
                <span className="text-green-500 flex">
                  <IoMdCheckmark size={20}></IoMdCheckmark>
                </span>
              </p>
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;