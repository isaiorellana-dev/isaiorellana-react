import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import Welcome from "@components/Welcome";
import PortfolioSlider from "@components/PortfolioSlider";
import Services from "@components/Services";
import "@styles/Home.scss";
import useSlider from "@hooks/useSlider";

const Home = () => {
  const { loading, clasesImg, indexImg, setAutoplay, prev, next } = useSlider();
  useDocumentTitle("Home");
  return (
    <React.Fragment>
      <section className="home-section-1">
        <Welcome />
        <PortfolioSlider
          loading={loading}
          clasesImg={clasesImg}
          indexImg={indexImg}
          setAutoplay={setAutoplay}
          prev={prev}
          next={next}
        />
      </section>
      <section className="home-section-2">
        <Services loading={loading} />
      </section>
    </React.Fragment>
  );
};

export default Home;
