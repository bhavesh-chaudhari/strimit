import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../utils/localStorage";

interface Props {
  protectedRoutes: string[];
  hiddenRoutes: string[];
  children: JSX.Element;
}

const PrivateRoute = ({ protectedRoutes, hiddenRoutes, children }: Props) => {
  const router = useRouter();

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;
  const pathIsHidden = hiddenRoutes.indexOf(router.pathname) !== -1;

  const { data, isLoading } = useAuth();
  const isAuthenticated = data?.isAuthenticated;

  useEffect(() => {
    const protect = async () => {
      if (!isLoading && !isAuthenticated && pathIsProtected) {
        await router.replace("/signup");
      }
    };
    protect();
  }, [isAuthenticated, isLoading, pathIsProtected]);

  useEffect(() => {
    const user = getUserFromLocalStorage();

    const protect = async () => {
      if (user?.id && user?.role && pathIsHidden) {
        await router.replace("/");
        toast("Already Logged In", {
          type: "info",
          position: "bottom-right",
          theme: "light",
        });
      }
    };
    protect();
  }, [pathIsHidden]);

  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    return (
      <div className="min-h-screen w-full absolute left-0 top-0 bg-black"></div>
    );
  }

  return children;
};

export default PrivateRoute;
