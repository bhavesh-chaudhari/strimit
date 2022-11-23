import {
  QueryClient,
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { request } from "../utils/axios";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { UserType } from "../types/user";
import { API_BASE_URL } from "../utils/baseUrl";

export const useUserTokenInfo = () => {
  const [id, setId] = useState<number | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const userFromLStorage = getUserFromLocalStorage();

    if (!userFromLStorage) {
      return;
    }

    const decoded = jwtDecode(userFromLStorage?.token) as {
      id: number | null;
      role: string | null;
      email: string | null;
    };

    setId(decoded.id);
    setRole(decoded.role);
    setEmail(decoded.email);
  }, [router.pathname]);

  return { id, role, email };
};

const fetchUser = async ({ queryKey }: { queryKey: QueryKey }) => {
  const user = getUserFromLocalStorage()
  
  const res = await request({ url: `/users/${user?.id}` });

  const data = res?.data;

  return data;
};

export const useCurrentUser = () => {
  const { id } = useUserTokenInfo();

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchUser,
    enabled: !!id,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    refetchOnMount: false,
  });
};

const updateRole = async (updateValues: any) => {
  const res = await request({
    url: `/users/${updateValues.id}`,
    method: "patch",
    data: { role: updateValues.role },
  });

  return res;
};

export const useUpdateRole = () => {
  const { id } = useUserTokenInfo();

  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation({
    mutationFn: updateRole,
    onSuccess: async (data) => {
      if (data?.status === 200) {
        queryClient.setQueryData(["currentUser"], data.data);
        if (data.data.role === "advertiser") {
          await router.replace("/advertiser");
        }
        if (data.data.role === "streamer") {
          await router.replace("/streamer");
        }
      }
    },
    mutationKey: ["update", "role", id],
  });
};
