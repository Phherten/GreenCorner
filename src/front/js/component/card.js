import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div class="col-xs col-lg-4 col-xl-3 mb-2 mt-3">
      <div className="card card-elemento" style={{ minWidth: "25rm" }}>
        <div className="card-body bg-light text-dark rounded d-flex justify-content-between align-items-center">
          <h4 className="card-title">{props.name}</h4>
          <img src={props.img} style={{ height: "120px" }} className="p-0" />
        </div>
      </div>
    </div>
  );
};
