import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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

const checkAuth = async () => {
  const res = await request({ url: "/auth/checkAuth" });

  const data = res?.data;

  console.log("check auth");

  const isAuthenticated: boolean = res?.status === 200;

  return { role: data?.role as string, isAuthenticated };
};

export const useAuth = () => {
  const router = useRouter();

  const protectedRoutes = ["/dashboard", "/streamer-form", "/advertiser-form"];

  // const isProtected = router.pathname.startsWith("/dashboard");
  const isProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  return useQuery({
    queryKey: ["auth"],
    queryFn: checkAuth,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: isProtected,
  });
};

export const useLogin = () => {
  const router = useRouter();

   const queryClient = useQueryClient();

  return useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        addUserToLocalStorage(data.data);
        queryClient.setQueryData(["user", data?.data.id], data.data) ;
        toast("Logged In", {
          type: "success",
          position: "bottom-right",
          theme: "dark",
        });
      }
    },
  });
};

export const useSignup = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation(signup, {
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        addUserToLocalStorage(data.data);
         if (data.data.role === "streamer") {
           router.replace("/streamer-form");
         }
         if (data.data.role === "advertiser") {
           router.replace("/advertiser-form");
         }
        toast("Signed Up Successfully", {
          type: "success",
          position: "top-right",
          theme: "dark",
          style: {
            marginTop: "5rem",
          },
        });
      }
    },
  });
};

export const logout = () => {
  removeUserFromLocalStorage();
  toast("Logged Out Successfully", {
    type: "success",
    position: "bottom-right",
    theme: "dark",
    style: {
      marginTop: "5rem",
    },
  });
};
