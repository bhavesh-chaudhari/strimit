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
import { API_BASE_URL } from "../utils/baseUrl";

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

const googleCodeLogin = async (postData: { code: string; role: any }) => {
  // await axios.post(`${API_BASE_URL}/auth/google`, {
  //       code,
  //       role: formValues.role,
  //     });
  return request({
    url: `${API_BASE_URL}/auth/google`,
    method: "post",
    data: postData,
  });
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
        queryClient.setQueryData(["currentUser"], data.data);
        queryClient.setQueryData(["auth"], () => {
          return { role: data?.data.role, isAuthenticated: true };
        });
        await router.replace("/");
        toast("Logged In", {
          type: "success",
          position: "bottom-right",
          theme: "dark",
        });
      } else {
        toast("Invalid Credentials", {
          type: "error",
          position: "top-center",
          theme: "dark",
          style: {
            marginTop: "2rem",
          },
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
        queryClient.setQueryData(["currentUser"], data.data);
        queryClient.setQueryData(["auth"], () => {
          return { role: data?.data.role, isAuthenticated: true };
        });
        if (data.data.role === "streamer") {
          router.replace("/streamer");
        }
        if (data.data.role === "advertiser") {
          router.replace("/contact");
        }
        toast("Signed Up Successfully", {
          type: "success",
          position: "top-right",
          theme: "dark",
          style: {
            marginTop: "5rem",
          },
        });
        return;
      }

      if (data?.status === 409) {
        toast("User Already Exists", {
          type: "error",
          position: "top-center",
          theme: "dark",
          style: {
            marginTop: "2rem",
          },
        });
        return;
      } else {
        toast("A problem has occured. Please try again later.", {
          type: "error",
          position: "top-center",
          theme: "dark",
          style: {
            marginTop: "2rem",
          },
        });
      }
    },
  });
};

export const useGoogleCodeLoginRQHook = () => {
  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation(googleCodeLogin, {
    onSuccess: async (data) => {
      console.log(data);
      if (data?.status === 200) {
        addUserToLocalStorage(data?.data);
        queryClient.setQueryData(["currentUser"], data?.data);
        queryClient.setQueryData(["auth"], () => {
          return { role: data?.data?.role, isAuthenticated: true };
        });
        if (data?.data?.role === "streamer") {
          await router.replace("/streamer");
        }
        if (data?.data?.role === "advertiser") {
          await router.replace("/advertiser");
        }
        toast("Signed In", {
          type: "success",
          position: "bottom-right",
          theme: "dark",
        });
      }
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logout = () => {
    const user = getUserFromLocalStorage();
    removeUserFromLocalStorage();
    queryClient.setQueryData(["currentUser"], null);
    toast("Logged Out Successfully", {
      type: "success",
      position: "bottom-right",
      theme: "dark",
      style: {
        marginTop: "5rem",
      },
    });
  };

  return logout;
};
