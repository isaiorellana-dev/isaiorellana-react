import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import Welcome from "@components/Welcome";
import PortfolioSlide from "@components/PortfolioSlide";
import Services from "@components/Services";
import "@styles/Home.scss";

const Home = () => {
  useDocumentTitle("Home");
  return (
    <React.Fragment>
      <section className="home-section-1">
        <Welcome />
        <PortfolioSlide />
      </section>
      <section className="home-section-2">
        <Services />
      </section>
    </React.Fragment>
  );
};

export default Home;
