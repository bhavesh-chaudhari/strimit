import React from 'react'
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import styles from "../../styles/auth/GoogleButton.module.scss"
import {FcGoogle} from "react-icons/fc"
import { API_BASE_URL } from '../../config/baseUrl';
import axios from 'axios';
import {toast} from "react-toastify"
import { addUserToLocalStorage } from '../../utils/localStorage';
import { useRouter } from 'next/router';

const GoogleButton = () => {

  const router = useRouter()
  
   const googleLogin = useGoogleLogin({
     onSuccess: async ({ code }) => {
       const {data, status} = await axios.post(`${API_BASE_URL}/auth/google`, {
         code,
       });

       console.log(data);
       if(status === 200){
        addUserToLocalStorage(data)
        await router.replace("/streamer-form");
         toast("Signed In", {
           type: "success",
           position: "bottom-right",
           theme: "dark",
         });
       }
     },
     flow: "auth-code",
   });
  
  return (
      <button type="button" className={styles["container"]}  onClick={googleLogin} >
        <span className={styles["icon"]}  >
          <FcGoogle size={22} ></FcGoogle>
        </span>
        <span>Continue With Google</span>
      </button>
  );
}

export default GoogleButton