import React from "react";
import "@styles/Welcome.scss";
import myself from "@img/isai 2.png";

const Welcome = () => {
  return (
    <div className="intro-isai">
      <picture>
        <a href="sobremi">
          <img src={myself} alt="Isai Orellana" />
        </a>
      </picture>
      <div className="isai-titulo">
        <h2>Isaí Orellana.</h2>
        <p>Fotógrafo Profesional.</p>
      </div>
      <p className="description">
        Bienvenido a mi página web, aquí podrás ver mi trabajo y los detalles de
        los servicios que ofrezco.
      </p>
    </div>
  );
};

export default Welcome;
