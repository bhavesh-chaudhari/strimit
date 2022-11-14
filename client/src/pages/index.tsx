import Head from 'next/head'
import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HowItWorksMain from '../components/howItWorks/HowItWorksMain'
import Faq from '../components/Faq'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Live - The way of advertising for live streams.</title>
      </Head>
      <Hero></Hero>
      <HowItWorksMain></HowItWorksMain>
      {/* <Faq></Faq> */}
    </>
  )
}

export default Home
