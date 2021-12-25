import React from "react";
import dariel from "@img/dariel.jpg";
import nelsi from "@img/nelsi.jpg";
import paperas from "@img/paperas.jpg";
import maquillaje from "@img/maquillaje.jpg";
import left from "@icons/left.svg";
import right from "@icons/right.svg";
import fire from "@img/fire.jpg";
import "@styles/Slider.scss";
import useSlider from "@hooks/useSlider";

const Slider = () => {
  const { clasesImg, indexImg, setAutoplay, prev, next } = useSlider();

  const [loading, setLoading] = React.useState(true);
  window.onload = () => {
    setLoading(false);
  };
  console.log(loading);
  return (
    <div className="slider">
      {loading && (
        <div className="img-container">
          <div className="img-2">
            <div></div>
          </div>
          <div className="img-3">
            <div></div>
          </div>
          <div className="img-4">
            <div></div>
          </div>
        </div>
      )}
      <div className={loading ? "hide" : "img-container"}>
        <img className={clasesImg[indexImg]} src={nelsi} />
        <img
          className={clasesImg[indexImg === 4 ? 0 : indexImg + 1]}
          src={paperas}
        />
        <img
          className={
            clasesImg[
              indexImg === 4
                ? 1
                : indexImg + 2 && indexImg === 3
                ? 0
                : indexImg + 2
            ]
          }
          src={fire}
        />
        <img
          className={
            clasesImg[
              indexImg === 2
                ? 0
                : indexImg + 3 && indexImg === 3
                ? 1
                : indexImg + 3 && indexImg === 4
                ? 2
                : indexImg + 3
            ]
          }
          src={dariel}
        />
        <img
          className={clasesImg[indexImg === 0 ? 4 : indexImg - 1]}
          src={maquillaje}
        />
      </div>
      <div
        className="arrowLeft"
        onClick={() => {
          setAutoplay(false);
          prev();
        }}
      >
        <img src={left} alt="left" />
      </div>
      <div
        className="arrowRight"
        onClick={() => {
          setAutoplay(false);
          next();
        }}
      >
        <img src={right} alt="right" />
      </div>
    </div>
  );
};

export default Slider;
