import React from "react";
import dariel from "@img/dariel.jpg";
import nelsi from "@img/nelsi.jpg";
import paperas from "@img/paperas.jpg";
import maquillaje from "@img/maquillaje.jpg";
import CardTitle from "./common/CardTitle";
import "@styles/PortfolioSlide.scss";

const PortfolioSlide = () => {
  return (
    <div className="portafolio-slider">
      <div className="slider-imgs">
        <div className="slider-imgs--img img-1">
          <img src={nelsi} alt="Retrato Isai" />
        </div>
        <div className="slider-imgs--img img-2">
          <img src={paperas} alt="Retrato Isai" />
        </div>
        <div className="slider-imgs--img img-3">
          <img src={maquillaje} alt="Retrato Isai" />
        </div>
        <div className="slider-imgs--img img-4">
          <img src={dariel} alt="Retrato Isai" />
        </div>
      </div>
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
