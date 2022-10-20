import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { addUserToLocalStorage } from "../utils/localStorage";
import { useRouter } from "next/router";
import {toast} from "react-toastify"

interface FormValues {
  email: string;
  password: string;
}

const login = (formValues: FormValues) => {
  return request({ url: "/auth/login", method: "post", data: formValues });
};

const signup = (formValues: FormValues) => {
  return request({ url: "/auth/signup", method: "post", data: formValues });
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        addUserToLocalStorage(data.data);
        router.replace("/");
        toast("Logged In", {
          type: "success",
          position: "bottom-right",
          theme: "dark"
        })
      }
    },
  });
};

export const useSignup = () => {
  const router = useRouter();

  return useMutation(signup, {
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        addUserToLocalStorage(data.data);
        router.replace("/");
         toast("Signed Up Successfully", {
           type: "success",
           position: "bottom-right",
           theme: "dark",
         });
      }
    },
  });
};
