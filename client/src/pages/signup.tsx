import React from 'react'
import type { NextPage } from 'next'
import AuthMain from '../components/auth/AuthMain'
import Head from 'next/head'

const signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup - Live</title>
        <meta
          property="og:image"
          content="https://liveads.stream/api/og?title=Signup&path=www.liveads.stream/signup"
        ></meta>
      </Head>
      <AuthMain isSignUp={true}></AuthMain>
    </>
  );
}

export default signup