import React, {useState} from 'react'
import SignUpForm from './AuthForm';
import styles from "../../styles/auth/AuthMain.module.scss"
import DottedBg from "../svgs/DottedBg"

const AuthMain = ({isSignUp}: {isSignUp: boolean}) => {

  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["heading"]}>
            <h1>{isSignUp ? "Sign Up" : "Login"} To Live</h1>
          </div>
          <div className={styles["form"]}>
            <SignUpForm isSignUp={isSignUp}  ></SignUpForm>
            <div className={styles["bg"]}>
              <DottedBg></DottedBg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthMain