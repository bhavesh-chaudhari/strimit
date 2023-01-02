import React from 'react'
import Head from 'next/head';
import { useUserTokenInfo } from '../hooks/useUser';

const contact = () => {

  const {id} = useUserTokenInfo()
  
  return (
    <>
      <Head>
        <title>Contact - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=Contact&path=www.strimit.in/contact"
        ></meta>
      </Head>
      <div className="flex justify-center items-center pt-[130px] md:pt-12 flex-col py-12">
        <div className="border p-8 rounded-md w-[90%] md:w-max">
          <h1 className="text-4xl mb-6">
            Thank you for connecting with strimit
          </h1>
          {id && (
            <p className="text-2xl mb-6">Our team will contact you shortly</p>
          )}
          <p>
            For queries, reach out to us at{" "}
            <a className="text-fuchsia-600" href="mailto:support@strimit.in">
              support@strimit.in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default contact