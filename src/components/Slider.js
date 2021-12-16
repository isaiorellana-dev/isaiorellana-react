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

  const next = () => {
    indexImg === 3 ? setIndexImg(0) : setIndexImg(indexImg + 1);
  };
  const prev = () => {
    indexImg === 0 ? setIndexImg(3) : setIndexImg(indexImg - 1);
  };

  // setTimeout(() => {
  //   next();
  //   console.log("next");
  // }, 2500);

  return (
    <div className="slider">
      <div className="img-container">
        <img className={clasesImg[indexImg]} src={nelsi} />
        <img
          className={clasesImg[indexImg === 3 ? 0 : indexImg + 1]}
          src={paperas}
        />
        <img
          className={
            clasesImg[
              indexImg === 3
                ? 1
                : indexImg + 2 && indexImg === 2
                ? 0
                : indexImg + 2
            ]
          }
          src={maquillaje}
        />
        <img
          className={
            clasesImg[
              indexImg === 1
                ? 0
                : indexImg + 3 && indexImg === 2
                ? 1
                : indexImg + 3 && indexImg === 3
                ? 2
                : indexImg + 3
            ]
          }
          src={dariel}
        />
        <img className={clasesImg[4]} src={fire} />
      </div>
      <div className="arrowLeft" onClick={prev}>
        <img src={left} alt="left" />
      </div>
      <div className="arrowRight" onClick={next}>
        <img src={right} alt="right" />
      </div>
    </div>
  );
};

export default Slider;
