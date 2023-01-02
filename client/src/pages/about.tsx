import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import AboutMain from '../components/AboutMain'

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=About&path=www.strimit.in/about"
        ></meta>
      </Head>
      <AboutMain></AboutMain>
    </>
  );
}

export default about