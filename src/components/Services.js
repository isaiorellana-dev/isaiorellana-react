import React from "react";
import "@styles/Services.scss";
import avocados from "@img/avocados.jpg";
import chuleta from "@img/chuleta.jpg";
import yeti from "@img/yeti.jpg";

const Services = (props) => {
  const [imgLoading, setImgLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setImgLoading(false);
    }, 3500);
  }, []);
  const loadingCheck = () => {
    if (imgLoading) {
      return true;
    } else if (props.loading) {
      return true;
    } else {
      return false;
    }
  };
  console.log(props.loading);
  return (
    <section className="section-2">
      <article className="home-card">
        <div className="home-card--title">
          <h2>FOTOGRAFÍA COMERCIAL</h2>
        </div>
        <div className="home-card--img-container">
          <div className="home-cards--img home-cards--img-1">
            <img src={avocados} alt="Fotografia comercial IsaiOrellana" />
          </div>
          <div className="home-cards--img home-cards--img-2">
            <img
              src={chuleta}
              alt="Fotografia Gastronomica Chuleta Isai Orellana"
            />
          </div>
          <div className="home-cards--img home-cards--img-3">
            <img src={yeti} alt="Fotografia Comercial Yeti IsaiOrellana" />
          </div>
          {loadingCheck() && (
            <div className="loading">
              <div></div>
            </div>
          )}
        </div>
        <p>
          <span>
            Que tus clientes conozcan la mejor cara de tu negocio con
            fotografías profesionales.
          </span>
          <br />
          Seguramente sabes de la enorme importancia de la{" "}
          <span>publicidad</span> para tu negocio, la gente necesita ver tus
          productos o los servicios que tienes para ofrecerles y si tu objetivo
          es dar un servicio o producto de <span>calidad</span> lo mejor es
          promocionar tu negocio con imágenes de <span>calidad</span>.
        </p>
        <div className="button-vermas">
          <a href="servicios">
            <h2>ver más</h2>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Services;
