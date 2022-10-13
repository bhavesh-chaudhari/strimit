import React from 'react'
import { GoogleLogin } from "@react-oauth/google";

const SignInMain = () => {
  return (
    <div>
      <button>Continue With Google</button>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
      ;
    </div>
  );
}

export default SignInMain