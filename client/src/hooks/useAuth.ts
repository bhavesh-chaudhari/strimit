import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useUserTokenInfo } from "./useUser";

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

  const isAuthenticated: boolean = res?.status === 200;

  return { role: data?.role as string, isAuthenticated };
};

export const useAuth = () => {
  const router = useRouter();

  const protectedRoutes = ["/dashboard", "/streamer", "/advertiser"];

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
    onSuccess: async (data) => {
      if (data?.status === 200) {
        addUserToLocalStorage(data.data);
        queryClient.setQueryData(["users", data?.data.id], data.data) ;
        queryClient.setQueryData(["auth"], () => {
          return { role: data?.data.role, isAuthenticated: true };
        });
        await router.replace("/")
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
      if (data?.status === 200) {
        addUserToLocalStorage(data.data);
        queryClient.setQueryData(["users", data?.data.id], data.data);
        queryClient.setQueryData(["auth"], () => {
          return { role: data?.data.role, isAuthenticated: true };
        });
         if (data.data.role === "streamer") {
           router.replace("/streamer");
         }
         if (data.data.role === "advertiser") {
           router.replace("/advertiser");
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

export const useLogout = () => {

  const queryClient = useQueryClient();

  const logout = ()=>{
    const user = getUserFromLocalStorage();
    removeUserFromLocalStorage();
    queryClient.setQueryData(["users", user.id], null);
    toast("Logged Out Successfully", {
      type: "success",
      position: "bottom-right",
      theme: "dark",
      style: {
        marginTop: "5rem",
      },
    });
  }

  return logout
};
