import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default PageLayout;
