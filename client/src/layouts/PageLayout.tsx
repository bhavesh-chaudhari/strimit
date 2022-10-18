import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyrightNotice from "../components/CopyrightNotice"
import {useRouter} from "next/router"

interface Props {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: Props): JSX.Element => {

  const router = useRouter()

  const currentPagePath = router.pathname 
  
  const noFooterPages = ["/signup", "/login"]
  
  return (
    <>
      <Navbar></Navbar>
      {children}
      {noFooterPages.includes(currentPagePath) ? null : <Footer></Footer>}
      <CopyrightNotice></CopyrightNotice>
    </>
  );
};

export default PageLayout;
