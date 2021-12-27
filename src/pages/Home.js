import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import Welcome from "@components/Welcome";
import VerMas from "@common/VerMas";
import CardTitle from "@common/CardTitle";
import Services from "@components/Services";
import "@styles/Home.scss";
import Slider from "@components/Slider";
import useSlider from "@hooks/useSlider";
import avocados from "@img/avocados.jpg";
import chuleta from "@img/chuleta.jpg";
import yeti from "@img/yeti.jpg";
import graduacion from "@img/graduacion.jpg";
import keren from "@img/keren.jpg";
import inauguracion from "@img/inauguracion.jpg";

const Home = () => {
  const { loading, clasesImg, indexImg, setAutoplay, prev, next } = useSlider();
  useDocumentTitle("Home");
  return (
    <React.Fragment>
      <section className="home-section-1">
        <Welcome />

        <div className="portafolio-slider">
          <Slider
            loading={loading}
            clasesImg={clasesImg}
            indexImg={indexImg}
            setAutoplay={setAutoplay}
            prev={prev}
            next={next}
          />
          <CardTitle text="Mi Portafolio" className="card-title" />
          <VerMas className="button-outside" href="portafolio" />
        </div>
      </section>
      <section className="home-section-2">
        <Services
          firstImg={avocados}
          secondImg={yeti}
          thirdImg={chuleta}
          loading={loading}
          title="FOTOGRAFÍA Comercial"
          subtitle="Que tus clientes conozcan la mejor cara de tu negocio con fotografías
          profesionales."
          paragraph={
            <React.Fragment>
              Seguramente sabes de la enorme importancia de la
              <span> publicidad </span>
              para tu negocio, la gente necesita ver tus productos o los
              servicios que tienes para ofrecerles y si tu objetivo es dar un
              servicio o producto de
              <span> calidad </span> lo mejor es promocionar tu negocio con
              imágenes de
              <span> calidad</span>.
            </React.Fragment>
          }
        />
        <Services
          firstImg={keren}
          secondImg={graduacion}
          thirdImg={inauguracion}
          loading={loading}
          title="FOTOGRAFÍA SOCIAL"
          subtitle="Un recuerdo tiene mucha más fuerza cuando tienes como verlo."
          paragraph={
            <React.Fragment>
              Guarda momentos únicos con un <span>buen retrato</span>, pero no
              te limites solo a fotografías con celulares. La resolución, la
              nitidez, los colores y la profundidad son solo algunas
              características que pueden mejorar una fotografía y una cámara
              <span> profesional</span> sí que esta lista para sacar la mejor
              imagen de ti.
            </React.Fragment>
          }
        />
      </section>
    </React.Fragment>
  );
};

export default Home;
