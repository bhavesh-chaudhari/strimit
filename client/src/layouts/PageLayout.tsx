import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyrightNotice from "../components/CopyrightNotice"
import {useRouter} from "next/router"
import PrivateRoute from "../components/PrivateRoute"
import styles from "../styles/Layout.module.scss"

interface Props {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: Props): JSX.Element => {

  const router = useRouter()

  const currentPagePath = router.pathname 
  
  const noFooterPages = ["/signup", "/login", "/streamer-form"]

  const protectedRoutes = ["/dashboard", "/streamer-form", "/advertiser-form"];
  
  return (
    <PrivateRoute protectedRoutes={protectedRoutes}>
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
