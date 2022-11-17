import React from 'react'
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import styles from "../../styles/auth/GoogleButton.module.scss"
import {FcGoogle} from "react-icons/fc"
import { API_BASE_URL } from '../../config/baseUrl';
import axios from 'axios';
import {toast} from "react-toastify"
import { addUserToLocalStorage } from '../../utils/localStorage';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const GoogleButton = ({formValues, isSignUp}: any) => {

  const router = useRouter()
  
   const googleLogin = useGoogleLogin({
     onSuccess: async ({ code }) => {
       const {data, status} = await axios.post(`${API_BASE_URL}/auth/google`, {
         code,
         type: formValues.type
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
  
   console.log(formValues)
   
   const isDisabled = isSignUp && !formValues?.type
   
  return (
    <button
      disabled={isDisabled ? true : false}
      type="button"
      title={isDisabled && "Please select one from streamer or advertiser"}
      className={clsx(styles["container"], isDisabled && "opacity-50 cursor-not-allowed")}
      onClick={googleLogin}
    >
      <span className={styles["icon"]}>
        <FcGoogle size={22}></FcGoogle>
      </span>
      <span>Continue With Google</span>
    </button>
  );
}

export default GoogleButton