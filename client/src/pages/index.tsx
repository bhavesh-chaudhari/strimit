import Head from 'next/head'
import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HowItWorksMain from '../components/howItWorks/HowItWorksMain'
import Faq from '../components/Faq'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LIVE - The way of advertising for live streams.</title>
        <meta name="description" content="Advertise your live streams with LIVE." />
        <meta name="keywords" content="Advertise, Live Streams" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.liveads.stream/" />
        <meta property="og:title" content="LIVE" />
        <meta property="og:description" content=""></meta>
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=1e-KE7QEvhUWcI1lpuFCm802R4ZnOp1pc"
        ></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.liveads.stream/" />
        <meta property="twitter:title" content="LIVE" />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://drive.google.com/uc?id=1e-KE7QEvhUWcI1lpuFCm802R4ZnOp1pc"
        ></meta>
      </Head>
      <Hero></Hero>
      <HowItWorksMain></HowItWorksMain>
      {/* <Faq></Faq> */}
    </>
  );
}

export default Home
