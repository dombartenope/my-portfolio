import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Typography from '../../styles/Typography';
import 'normalize.css';
import Menu from '../components/Menu'


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Menu />
      <main>{children}</main>
    </>
  )
};

export default Layout;
