import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyrightNotice from "../components/CopyrightNotice";
import { useRouter } from "next/router";
import PrivateRoute from "../components/PrivateRoute";
import styles from "../styles/Layout.module.scss";
import { useUser } from "../hooks/useUser";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../utils/localStorage";

interface Props {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: Props): JSX.Element => {
  const router = useRouter();

  const { data } = useUser();

  const currentPagePath = router.pathname;

  const noFooterPages = ["/signup", "/login", "/streamer"];

  const protectedRoutes = ["/dashboard", "/streamer", "/advertiser"];
  const hiddenRoutes = ["/signup", "/login"];

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user) {
      addUserToLocalStorage({ ...user, ...data });
    }
  }, [data]);

  return (
    <PrivateRoute hiddenRoutes={hiddenRoutes} protectedRoutes={protectedRoutes}>
      <>
        {" "}
        <Navbar></Navbar>
        <div className={styles["layout"]}>{children}</div>
        {/* {noFooterPages.includes(currentPagePath) ? null : <Footer></Footer>} */}
        <CopyrightNotice></CopyrightNotice>
      </>
    </PrivateRoute>
  );
};

export default PageLayout;
