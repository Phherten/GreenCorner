import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/bodyInfoPlantas.css";

export const BodyInfoPlantas = (props) => {
  return (
    <div>
      <h4 className="title-body-info-plantas"> {props.subTitle}</h4>
      <h5 className="text-body-info-plantas"> {props.text}</h5>
    </div>
  );
};
