import React from "react";
import "@styles/Vermas.scss";

const VerMas = (props) => {
  return (
    <div className={props.className}>
      <a href={props.href}>
        <h2>ver más</h2>
      </a>
    </div>
  );
};

export default VerMas;
