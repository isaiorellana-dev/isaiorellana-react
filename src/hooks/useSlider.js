import React from "react";

function useSlider() {
  const clasesImg = ["img-1", "img-2", "img-3", "img-4", "img-5"];

  const [indexImg, setIndexImg] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);

  const prev = () => {
    indexImg === 4 ? setIndexImg(0) : setIndexImg(indexImg + 1);
  };
  function next() {
    indexImg === 0 ? setIndexImg(4) : setIndexImg(indexImg - 1);
    return indexImg;
  }

  let timer;
  const updateTimer = () => {
    timer = setInterval(() => {
      next();
    }, 3000);
    if (autoplay === false) clearInterval(timer);
  };

  React.useEffect(() => {
    updateTimer();

    return () => clearInterval(timer);
  }, [autoplay, indexImg]);

  if (!autoplay) {
    window.onscroll = () => {
      setAutoplay(true);
    };
  }

  return { clasesImg, indexImg, setAutoplay, prev, next };
}

export default useSlider;
