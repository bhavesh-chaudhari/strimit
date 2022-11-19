import React, { useEffect, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import styles from "../../styles/auth/GoogleButton.module.scss";
import { FcGoogle } from "react-icons/fc";
import { API_BASE_URL } from "../../config/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { addUserToLocalStorage } from "../../utils/localStorage";
import { useRouter } from "next/router";
import clsx from "clsx";
import Modal from "../Modal";
import { useUpdateRole, useUserTokenInfo } from "../../hooks/useUser";
import { useQueryClient } from "@tanstack/react-query";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { PulseLoader} from "react-spinners";

const GoogleButton = ({ formValues, isSignUp }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  const router = useRouter();

  const { data, mutate: updateRole, isLoading } = useUpdateRole();

  const queryClient = useQueryClient();

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const { data, status } = await axios.post(`${API_BASE_URL}/auth/google`, {
        code,
        role: formValues.role,
      });

      if (status === 200) {
        addUserToLocalStorage(data);
         queryClient.setQueryData(["auth"], () => {
           return { role: data?.role, isAuthenticated: true };
         });
        queryClient.setQueryData(["users", data?.id], data);
        if (data.role === "streamer") {
          await router.replace("/streamer");
        }
        if (data.role === "advertiser") {
          await router.replace("/advertiser");
        }
        if (!data.role) {
          setIsModalOpen(true);
        }
        toast("Signed In", {
          type: "success",
          position: "bottom-right",
          theme: "dark",
        });
      }
    },
    flow: "auth-code",
  });

  const isDisabled = isSignUp && !formValues?.role;

  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (role && user.id) {
      updateRole({ role, id: user.id });
    }
  }, [role]);

  if (isModalOpen) {
    return (
      <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className="bg-black w-full flex justify-center items-center min-h-[100px]">
          <div className="flex gap-6">
            <span
              onClick={() => setRole("advertiser")}
              className="bg-white text-black w-24 flex items-center justify-center py-2 cursor-pointer"
            >
              {isLoading && role === "advertiser" ? (
                <PulseLoader size={8}></PulseLoader>
              ) : (
                "Advertiser"
              )}
            </span>
            <span
              onClick={() => setRole("streamer")}
              className="bg-white text-black w-24 flex items-center justify-center py-2 cursor-pointer"
            >
              {isLoading && role === "streamer" ? (
                <PulseLoader size={8}></PulseLoader>
              ) : (
                "Streamer"
              )}
            </span>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <button
      disabled={isDisabled ? true : false}
      type="button"
      title={isDisabled ? "Please select one from streamer or advertiser" : ""}
      className={clsx(
        styles["container"],
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={googleLogin}
    >
      <span className={styles["icon"]}>
        <FcGoogle size={22}></FcGoogle>
      </span>
      <span>Continue With Google</span>
    </button>
  );
};

export default GoogleButton;
