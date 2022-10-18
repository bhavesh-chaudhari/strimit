import React from 'react'
import type { NextPage } from "next";
import AuthMain from '../components/auth/AuthMain';

const login: NextPage = () => {
  return <AuthMain isSignUp={false}></AuthMain>;
};

export default login