import React, { useState } from "react";
import styles from "../../styles/auth/AuthForm.module.scss";
import formStyles from "../../styles/forms/Form.module.scss";
import GoogleButton from "./GoogleButton";
import Link from "next/link";
import { useLogin, useSignup } from "../../hooks/useAuth";
import { QueryClient } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";

const initialFormValues = {
  email: "",
  password: "",
  type: "",
};

interface FormValues {
  email: string;
  password: string;
  type?: string
}

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
      <div className={formStyles["field"]}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="email"
          id="email"
          type="email"
          required
        />
      </div>
      <div className={formStyles["field"]}>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          name="password"
          id="password"
          type="password"
          required
        />
      </div>
    </>
  );
};

const AuthForm = ({ isSignUp }: { isSignUp: boolean }) => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const [tabIndex, setTabIndex] = useState<number>(0);

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

  console.log(loginLoading);

  const handleSubmit = (e: React.FormEvent) => {
    console.log(formValues);
    e.preventDefault();
    if (isSignUp) {
      // signup user
      signup(formValues);
    } else {
      // login user
      delete formValues["type"]
      login(formValues);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <Fields
            formValues={formValues}
            setFormValues={setFormValues}
          ></Fields>
          {isSignUp && (
            <div className={styles["tabs-container"]}>
              <p>
                I'm {tabIndex === 0 && "a Streamer"}{" "}
                {tabIndex === 1 && "an Advertiser"}
              </p>{" "}
              <div className={styles["tabs"]}>
                <div
                  onClick={() => {
                    setTabIndex(0);
                    setFormValues({ ...formValues, type: "streamer" });
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
                    setFormValues({ ...formValues, type: "advertiser" });
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
            <GoogleButton></GoogleButton>
          </div>
          <div className={styles["notice"]}>
            <p>
              {isSignUp ? (
                <>
                  Already a user?{" "}
                  <Link href="/login" passHref>
                    <a>Login here</a>
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <Link href="/signup" passHref>
                    <a>Signup here</a>
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