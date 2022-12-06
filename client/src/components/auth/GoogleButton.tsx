import React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import styles from "../../styles/auth/GoogleButton.module.scss";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import clsx from "clsx";
import { BeatLoader } from "react-spinners";
import { useGoogleCodeLoginRQHook } from "../../hooks/useAuth";

const GoogleButton = ({ formValues, isSignUp }: any) => {
  const router = useRouter();

  const {mutate, isSuccess, isLoading} = useGoogleCodeLoginRQHook()

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      mutate({code, role: formValues.role})
    },
    flow: "auth-code",
  });

  const isDisabled = isSignUp && !formValues?.role;

  return (
    <button
      // disabled={isDisabled ? true : false}
      type="button"
      // title={isDisabled ? "Please select one from streamer or advertiser" : ""}
      className={clsx(
        styles["container"]
        // isDisabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={googleLogin}
    >
      {isLoading ? (
        <BeatLoader color="#1c1c1c" size={8}></BeatLoader>
      ) : (
        <>
          <span className={styles["icon"]}>
            <FcGoogle size={22}></FcGoogle>
          </span>
          <span>Continue With Google</span>
        </>
      )}
    </button>
  );
};

export default GoogleButton;
