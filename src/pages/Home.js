import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import Welcome from "@components/Welcome";
import PortfolioSlide from "@components/PortfolioSlide";

const Home = () => {
  useDocumentTitle("Home");
  return (
    <React.Fragment>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Welcome />
        <PortfolioSlide />
      </section>
    </React.Fragment>
  );
};

export default Home;
