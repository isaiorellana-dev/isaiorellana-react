import React from "react";
import dariel from "@img/dariel.jpg";
import nelsi from "@img/nelsi.jpg";
import paperas from "@img/paperas.jpg";
import maquillaje from "@img/maquillaje.jpg";
import left from "@icons/left.svg";
import right from "@icons/right.svg";
import fire from "@img/fire.jpg";
import "@styles/Slider.scss";
const Slider = () => {
  const clasesImg = ["img-1", "img-2", "img-3", "img-4", "img-5"];

  const [indexImg, setIndexImg] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);

  const prev = () => {
    indexImg === 4 ? setIndexImg(0) : setIndexImg(indexImg + 1);
  };
  const next = () => {
    indexImg === 0 ? setIndexImg(4) : setIndexImg(indexImg - 1);
  };

  const timer = autoplay ? setTimeout(next, 3000) : null;

  window.addEventListener("scroll", () => {
    setAutoplay(true);
  });
  return (
    <div className="slider">
      <div className="img-container">
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
          clearTimeout(timer);
          setAutoplay(false);
          prev();
        }}
      >
        <img src={left} alt="left" />
      </div>
      <div
        className="arrowRight"
        onClick={() => {
          clearTimeout(timer);
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
