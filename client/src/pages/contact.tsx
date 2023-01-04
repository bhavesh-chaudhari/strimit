import React, { useEffect } from "react";
import Head from "next/head";
import { useUserTokenInfo } from "../hooks/useUser";
import { useTrackContactVisit } from "../hooks/useCollect";

const contact = () => {
  const { id } = useUserTokenInfo();
  const { mutate } = useTrackContactVisit();

  useEffect(() => {
    if (id) {
      mutate();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Contact - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=Contact&path=www.strimit.in/contact"
        ></meta>
      </Head>
      <div className="flex relative justify-center z-[5] items-center pt-[130px] md:pt-12 flex-col py-12">
        <div className="border relative p-8 z-[10] rounded-md w-[90%] md:w-max">
          <h1 className="text-4xl mb-6 z-[5] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-yellow-400">
            Thank you for connecting with strimit
          </h1>
          {id && (
            <p className="text-2xl mb-6">Our team will contact you shortly</p>
          )}
          <p>
            {id
              ? " Please look out for a mail from"
              : "For queries, contact us at"}{" "}
            <a className="text-fuchsia-600" href="mailto:team@strimit.in">
              team@strimit.in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default contact;
