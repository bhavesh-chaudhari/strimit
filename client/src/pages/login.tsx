import React from 'react'
import Head from 'next/head';
import type { NextPage } from "next";
import AuthMain from '../components/auth/AuthMain';

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - Strimit</title>
        <meta
          property="og:image"
          content="https://strimit.in/api/og?title=LOGIN&path=www.strimit.in/login"
        ></meta>
      </Head>
      <AuthMain isSignUp={false}></AuthMain>
    </>
  );
};

export default login