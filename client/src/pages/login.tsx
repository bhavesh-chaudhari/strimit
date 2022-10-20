import React from 'react'
import Head from 'next/head';
import type { NextPage } from "next";
import AuthMain from '../components/auth/AuthMain';

const login: NextPage = () => {
  return (
    <>
    <Head>
      <title>Login - Live</title>
    </Head>
      <AuthMain isSignUp={false}></AuthMain>
    </>
  );
};

export default login