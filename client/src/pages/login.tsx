import React from 'react'
import Head from 'next/head';
import type { NextPage } from "next";
import AuthMain from '../components/auth/AuthMain';

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - LIVE</title>
        <meta
          property="og:image"
          content="https://liveads.stream/api/og?title=LOGIN&path=www.liveads.stream/login"
        ></meta>
      </Head>
      <AuthMain isSignUp={false}></AuthMain>
    </>
  );
};

export default login