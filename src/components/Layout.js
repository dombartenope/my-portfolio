import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Typography from '../../styles/Typography';
import 'normalize.css';
import Menu from '../components/Menu'
import Footer from "./Footer";
import Socials from "./Socials";


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Menu />
      <main>{children}</main>
      {/* TODO: ADD SOCIALS COMPONENT */}
      {/* <Socials /> */}
      <Footer />
    </>
  )
};

export default Layout;
