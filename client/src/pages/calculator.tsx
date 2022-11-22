import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import CalculatorMain from "../components/CalculatorMain";

const calculator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculator - Live</title>
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=1TEG4Va0NpT4S4S2vBL9sEawcqnKc3o8t"
        ></meta>
      </Head>
      <CalculatorMain></CalculatorMain>
    </>
  );
};

export default calculator;
