import React from "react";
import Header from "@components/Header";
import "@styles/Layout.scss";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
