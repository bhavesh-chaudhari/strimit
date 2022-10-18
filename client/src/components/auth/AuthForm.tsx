import React from "react";
import styles from "../../styles/auth/AuthForm.module.scss";
import formStyles from "../../styles/forms/Form.module.scss";
import GoogleButton from "./GoogleButton";
import Link from "next/link";

const AuthForm = ({isSignUp}: {isSignUp: boolean}) => {

    const handleSubmit = ()=>{

    }

    const handleChange = ()=>{

    }
    
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <div className={formStyles["field"]}>
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" required />
          </div>
          <div className={formStyles["field"]}>
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="text" required />
          </div>
          <button>{isSignUp ? "Sign Up" : "Login"}</button>
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
