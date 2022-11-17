import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

interface Props {
  protectedRoutes: string[];
  children: JSX.Element;
}

const PrivateRoute = ({ protectedRoutes, children }: Props) => {
  const router = useRouter();

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  const { data, isLoading } = useAuth();
  const isAuthenticated = data?.isAuthenticated;

  console.log(pathIsProtected)

  useEffect(() => {
    const protect = async () => {
      if (!isLoading && !isAuthenticated && pathIsProtected) {
        await router.replace("/");
      }
    };
    protect();
  }, [isAuthenticated, isLoading, pathIsProtected]);

  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    return (
      <div className="min-h-screen w-full absolute left-0 top-0 bg-black"></div>
    );
  }

  return children;
};

export default PrivateRoute;
