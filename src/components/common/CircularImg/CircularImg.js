import React from "react";
import style from "./CircularImg.module.css";
function CircularImg({ width = 24, height = 24, ...props }) {
  return (
    <div className={style["circular-img"]}>
      <img src={props.src} width={width} height={height} alt={props.alt} />
    </div>
  );
}

export default CircularImg;
