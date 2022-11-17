import React, {useState} from 'react'
import SignUpForm from './AuthForm';
import styles from "../../styles/auth/AuthMain.module.scss"
import DottedBg from "../svgs/DottedBg"

const initialFormValues = {
  email: "",
  password: "",
  type: "",
};

export interface FormValues {
  email: string;
  password: string;
  type?: string;
}

const AuthMain = ({isSignUp}: {isSignUp: boolean}) => {

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className="">
            <h1 className="text-2xl font-bold md:text-3xl mb-4  md:mb-8">
              {isSignUp ? "Sign Up" : "Login"}
              {isSignUp && formValues.type ? ` as ${capitalizeFirstLetter(formValues?.type as string)}` : " to LIVE"}
            </h1>
          </div>
          <div className={styles["form"]}>
            <SignUpForm
              setFormValues={setFormValues}
              formValues={formValues}
              isSignUp={isSignUp}
            ></SignUpForm>
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