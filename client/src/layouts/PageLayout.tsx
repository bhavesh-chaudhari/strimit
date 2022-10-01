import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {ThemeProvider} from "../theme/ThemeProvider"

interface Props {
    children?: React.ReactNode
}

const PageLayout = ({ children }: Props): JSX.Element => {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default PageLayout