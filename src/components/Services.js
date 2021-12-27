import React from "react";
import "@styles/Services.scss";
import VerMas from "./common/VerMas";
import CardTitle from "./common/CardTitle";

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
  return (
    <article className="home-card">
      <CardTitle text={props.title} className="home-card--title" />
      <div className="home-card--img-container">
        <div className="home-cards--img home-cards--img-1">
          <img src={props.firstImg} alt="Fotografia comercial IsaiOrellana" />
        </div>
        <div className="home-cards--img home-cards--img-2">
          <img
            src={props.secondImg}
            alt="Fotografia Gastronomica Chuleta Isai Orellana"
          />
        </div>
        <div className="home-cards--img home-cards--img-3">
          <img
            src={props.thirdImg}
            alt="Fotografia Comercial Yeti IsaiOrellana"
          />
        </div>
        {loadingCheck() && (
          <div className="loading">
            <div></div>
          </div>
        )}
      </div>
      <p>
        <span>{props.subtitle}</span>
        <br />
        {props.paragraph}
      </p>
      <VerMas className="button-inside" href="servicios" />
    </article>
  );
};

export default Services;
