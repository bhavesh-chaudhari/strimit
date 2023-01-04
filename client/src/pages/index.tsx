import Head from 'next/head'
import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HowItWorksMain from '../components/howItWorks/HowItWorksMain'
import { returnProps } from '../utils/imageMetadata'
import path from "path"

const Home: NextPage = (props) => {

  const {thumbnails} = props as any

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
          content="https://drive.google.com/uc?id=1eVa6aHL97bkDzv5tQqqy5efknFFboNWx"
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
          content="https://drive.google.com/uc?id=1eVa6aHL97bkDzv5tQqqy5efknFFboNWx"
        ></meta>
      </Head>
      <Hero imageData={thumbnails[0]} ></Hero>
      <HowItWorksMain imageData={thumbnails[1]} ></HowItWorksMain>
    </>
  );
}

export default Home

export const getStaticProps = async ()=>{

  const imagePaths = ["/images/hero-mockup-7.png", "/images/signup-mockup.png"];
  
  // Pass the image to plaiceholder
  const imageData = await Promise.all(
    imagePaths.map(async (imagePath) => {
      return await returnProps(imagePath);
    })
  );

  console.log(imageData)

  return {
    props: {
      // This data will then be used by <Image> in our frontEnd
      thumbnails: imageData
    },
  };
  
}