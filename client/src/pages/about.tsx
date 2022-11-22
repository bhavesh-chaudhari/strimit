import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import AboutMain from '../components/AboutMain'

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - LIVE</title>
        <meta
          property="og:image"
          content="https://liveads.stream/api/og?title=About&path=www.liveads.stream/about"
        ></meta>
      </Head>
      <AboutMain></AboutMain>
    </>
  );
}

export default about