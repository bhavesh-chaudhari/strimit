import React from 'react'
import type { NextPage } from 'next'
import AuthMain from '../components/auth/AuthMain'
import Head from 'next/head'

const signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=Signup&path=www.strimit.in/signup"
        ></meta>
      </Head>
      <AuthMain isSignUp={true}></AuthMain>
    </>
  );
}

export default signup