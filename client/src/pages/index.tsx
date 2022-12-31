import Head from 'next/head'
import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HowItWorksMain from '../components/howItWorks/HowItWorksMain'
import Faq from '../components/Faq'
// import Newsletter from '../components/Newsletter'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Strimit - Monetize Live Streams.</title>
        <meta
          name="description"
          content="Monetize Live Streams and get total control over your ads with an ability to stream on multiple platforms with ease."
        />
        <meta
          name="keywords"
          content="Advertise, Live Streams, Earn with ads, Advertising in live streams"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.strimit.in/" />
        <meta property="og:title" content="Strimit" />
        <meta
          property="og:description"
          content="Monetize Live Streams and get total control over your ads with an ability to stream on multiple platforms with ease."
        ></meta>
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=1e-KE7QEvhUWcI1lpuFCm802R4ZnOp1pc"
        ></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.strimit.in/" />
        <meta property="twitter:title" content="Strimit" />
        <meta
          property="twitter:description"
          content="Monetize Live Streams and get total control over your ads with an ability to stream on multiple platforms with ease."
        />
        <meta
          property="twitter:image"
          content="https://drive.google.com/uc?id=1e-KE7QEvhUWcI1lpuFCm802R4ZnOp1pc"
        ></meta>
      </Head>
      <Hero></Hero>
      <HowItWorksMain></HowItWorksMain>
      {/* <Newsletter></Newsletter> */}
      {/* <Faq></Faq> */}
    </>
  );
}

export default Home
