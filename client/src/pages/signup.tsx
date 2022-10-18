import React from 'react'
import type { NextPage } from 'next'
import AuthMain from '../components/auth/AuthMain'

const signup: NextPage = () => {
  return (
    <AuthMain isSignUp={true}></AuthMain>
  )
}

export default signup