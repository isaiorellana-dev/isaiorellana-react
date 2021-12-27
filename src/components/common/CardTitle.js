import React from "react";
import "@styles/CardTitle.scss";

const CardTitle = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.text}</h2>
    </div>
  );
};

export default CardTitle;
