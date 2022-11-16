import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import CalculatorMain from "../components/CalculatorMain";

const calculator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculator - Live</title>
      </Head>
      <CalculatorMain></CalculatorMain>
    </>
  );
};

export default calculator;
