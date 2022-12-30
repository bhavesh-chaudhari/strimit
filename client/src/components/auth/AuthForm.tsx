import React, { useState } from "react";
import styles from "../../styles/auth/AuthForm.module.scss";
import GoogleButton from "./GoogleButton";
import Link from "next/link";
import { useLogin, useSignup } from "../../hooks/useAuth";
import { QueryClient } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import { FormValues } from "./AuthMain";

const Fields = ({
  formValues,
  setFormValues,
}: {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="email"
          id="email"
          type="email"
          required
          className="w-full p-2 z-10 rounded-md transition-all duration-300 border border-fuchsia-500 outline-none focus:border-fuchsia-300"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          name="password"
          id="password"
          type="password"
          required
          className="w-full p-2 z-10 rounded-md transition-all duration-300 border border-fuchsia-500 outline-none focus:border-fuchsia-300"
        />
      </div>
    </>
  );
};

const AuthForm = ({
  isSignUp,
  formValues,
  setFormValues,
}: {
  isSignUp: boolean;
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}) => {
  const [tabIndex, setTabIndex] = useState<number>(2);

  const {
    mutate: login,
    isLoading: loginLoading,
    isError: loginError,
    isSuccess: loginSuccess,
  } = useLogin();

  const {
    mutate: signup,
    isLoading: signupLoading,
    isError: signupError,
    isSuccess: signupSuccess,
  } = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      // signup user
      signup(formValues);
    } else {
      // login user
      delete formValues["role"];
      login(formValues);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          {isSignUp && (
            <div className={styles["tabs-container"]}>
              <p>
                {tabIndex === 0 && "I'm a Streamer"}{" "}
                {tabIndex === 1 && "I'm an Advertiser"}
                {tabIndex === 2 && "Please select one"}
              </p>{" "}
              <div className={styles["tabs"]}>
                <div
                  onClick={() => {
                    setTabIndex(0);
                    setFormValues({ ...formValues, role: "streamer" });
                  }}
                  className={
                    tabIndex === 0
                      ? `${styles["tab"]} ${styles["active"]}`
                      : styles["tab"]
                  }
                >
                  Streamer
                </div>
                <div
                  onClick={() => {
                    setTabIndex(1);
                    setFormValues({ ...formValues, role: "advertiser" });
                  }}
                  className={
                    tabIndex === 1
                      ? `${styles["tab"]} ${styles["active"]}`
                      : styles["tab"]
                  }
                >
                  Advertiser
                </div>
              </div>
            </div>
          )}
          <Fields
            formValues={formValues}
            setFormValues={setFormValues}
          ></Fields>
          <button>
            {loginLoading || signupLoading ? (
              <ScaleLoader height={15} color="white"></ScaleLoader>
            ) : isSignUp ? (
              "Sign Up"
            ) : (
              "Login"
            )}
          </button>
          <div className={styles["separator"]}>
            <p>OR</p>
          </div>
          <div className={styles["google-btn"]}>
            <GoogleButton
              isSignUp={isSignUp}
              formValues={formValues}
            ></GoogleButton>
          </div>
          <div className={styles["notice"]}>
            <p>
              {isSignUp ? (
                <>
                  Already a user?{" "}
                  <Link href="/login" passHref>
                    Login here
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <Link href="/signup" passHref>
                    Signup here
                  </Link>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
