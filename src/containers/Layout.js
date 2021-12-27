import React from "react";
import Header from "@components/Header";
import "@styles/Layout.scss";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
