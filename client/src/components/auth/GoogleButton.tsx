import React from 'react'
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import styles from "../../styles/auth/GoogleButton.module.scss"
import {FcGoogle} from "react-icons/fc"
import { API_BASE_URL } from '../../config/baseUrl';
import axios from 'axios';

const GoogleButton = () => {

   const googleLogin = useGoogleLogin({
     onSuccess: async ({ code }) => {
       const tokens = await axios.post(`${API_BASE_URL}/auth/google`, {
         code,
       });

       console.log(tokens);
     },
     flow: "auth-code",
     hosted_domain: "iiitn.ac.in",
   });
  
  return (
      <button className={styles["container"]}  onClick={googleLogin} >
        <span className={styles["icon"]}  >
          <FcGoogle size={22} ></FcGoogle>
        </span>
        <span>Continue With Google</span>
      </button>
  );
}

export default GoogleButton