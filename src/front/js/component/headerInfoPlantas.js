import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/headerInfoPlantas.css";

export const HeaderInfoPlantas = (props) => {
  return (
    <div>
      <h1 className="title-header-info-plantas"> {props.title}</h1>
      <h4 className="summary-header-info-plantas"> {props.summary}</h4>
    </div>
  );
};
