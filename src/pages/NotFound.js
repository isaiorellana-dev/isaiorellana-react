import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import PortfolioSlider from "@components/PortfolioSlider";

const NotFound = () => {
  useDocumentTitle("Error 404");
  return (
    <React.Fragment>
      <h1>Error 404</h1>
      <PortfolioSlide />
    </React.Fragment>
  );
};

export default NotFound;
