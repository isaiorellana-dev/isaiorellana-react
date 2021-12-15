import React from "react";
import dariel from "@img/dariel.jpg";
import nelsi from "@img/nelsi.jpg";
import paperas from "@img/paperas.jpg";
import maquillaje from "@img/maquillaje.jpg";
import CardTitle from "./common/CardTitle";
import "@styles/PortfolioSlide.scss";
import Slider from "@components/Slider.js";
const PortfolioSlide = () => {
  return (
    <div className="portafolio-slider">
      <Slider />

      <CardTitle text="Mi Portafolio" />
      <div className="portafolio-slider--button">
        <a href="portafolio">
          <h2>ver más</h2>
        </a>
      </div>
    </div>
  );
};

export default PortfolioSlide;
