import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Typography from '../../styles/Typography';
import 'normalize.css';
import Menu from '../components/Menu'
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
};

export default Layout;
