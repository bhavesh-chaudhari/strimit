import React from "react";
import ProductMain from "../components/ProductMain";
import Head from "next/head";
import Link from "next/link";

const product = () => {
  return (
    <>
      <Head>
        <title>Offers - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=Offers&path=www.strimit.in/offers"
        ></meta>
      </Head>
      <div className="flex flex-col">
        <ProductMain></ProductMain>
        <div className="flex items-center justify-center mb-8 md:mb-16" >
          <Link className="bg-white text-fuchsia-600 shadow-md border text-xl hover:text-fuchsia-700 hover:scale-110 transition-all duration-200 border-gray-200 rounded-md px-12 py-4" href="/signup">Pre-Book Now</Link>
        </div>
      </div>
    </>
  );
};

export default product;
