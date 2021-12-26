import React from "react";
import dariel from "@img/dariel.jpg";
import nelsi from "@img/nelsi.jpg";
import paperas from "@img/paperas.jpg";
import maquillaje from "@img/maquillaje.jpg";
import left from "@icons/left.svg";
import right from "@icons/right.svg";
import fire from "@img/fire.jpg";
import "@styles/Slider.scss";

const Slider = (props) => {
  return (
    <div className="slider">
      {props.loading && (
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
      <div className={props.loading ? "hide" : "img-container"}>
        <img className={props.clasesImg[props.indexImg]} src={nelsi} />
        <img
          className={
            props.clasesImg[props.indexImg === 4 ? 0 : props.indexImg + 1]
          }
          src={paperas}
        />
        <img
          className={
            props.clasesImg[
              props.indexImg === 4
                ? 1
                : props.indexImg + 2 && props.indexImg === 3
                ? 0
                : props.indexImg + 2
            ]
          }
          src={fire}
        />
        <img
          className={
            props.clasesImg[
              props.indexImg === 2
                ? 0
                : props.indexImg + 3 && props.indexImg === 3
                ? 1
                : props.indexImg + 3 && props.indexImg === 4
                ? 2
                : props.indexImg + 3
            ]
          }
          src={dariel}
        />
        <img
          className={
            props.clasesImg[props.indexImg === 0 ? 4 : props.indexImg - 1]
          }
          src={maquillaje}
        />
      </div>
      <div
        className="arrowLeft"
        onClick={() => {
          props.setAutoplay(false);
          props.prev();
        }}
      >
        <img src={left} alt="left" />
      </div>
      <div
        className="arrowRight"
        onClick={() => {
          props.setAutoplay(false);
          props.next();
        }}
      >
        <img src={right} alt="right" />
      </div>
    </div>
  );
};

export default Slider;
