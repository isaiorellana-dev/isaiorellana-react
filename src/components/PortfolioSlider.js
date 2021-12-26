import React from "react";
import dariel from "@img/dariel.jpg";
import nelsi from "@img/nelsi.jpg";
import paperas from "@img/paperas.jpg";
import maquillaje from "@img/maquillaje.jpg";
import CardTitle from "./common/CardTitle";
import "@styles/PortfolioSlide.scss";
import Slider from "@components/Slider.js";
const PortfolioSlider = (props) => {
  return (
    <div className="portafolio-slider">
      <Slider
        loading={props.loading}
        clasesImg={props.clasesImg}
        indexImg={props.indexImg}
        setAutoplay={props.setAutoplay}
        prev={props.prev}
        next={props.next}
      />

      <CardTitle text="Mi Portafolio" />
      <div className="portafolio-slider--button">
        <a href="portafolio">
          <h2>ver más</h2>
        </a>
      </div>
    </div>
  );
};

export default PortfolioSlider;
