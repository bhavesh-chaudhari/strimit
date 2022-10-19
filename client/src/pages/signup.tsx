import React from 'react'
import type { NextPage } from 'next'
import AuthMain from '../components/auth/AuthMain'
import Head from 'next/head'

const signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup - Live</title>
      </Head>
      <AuthMain isSignUp={true}></AuthMain>
    </>
  );
}

export default signup