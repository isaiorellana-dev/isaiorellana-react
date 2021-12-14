import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import Welcome from "@components/Welcome";
import PortfolioSlide from "@components/PortfolioSlide";

const Home = () => {
  useDocumentTitle("Home");
  return (
    <React.Fragment>
      <section>
        <Welcome />
        <PortfolioSlide />
      </section>
    </React.Fragment>
  );
};

export default Home;
