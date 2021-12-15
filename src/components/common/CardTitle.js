import React from "react";
import "@styles/CardTitle.scss";

const CardTitle = (props) => {
  return (
    <div className="card-title">
      <h2>{props.text}</h2>
    </div>
  );
};

export default CardTitle;
