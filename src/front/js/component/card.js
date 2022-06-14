import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";

export const Card = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="col-xl-3 col-md-4 col-12 col-sm-6 p-1 pt-5 d-flex justify-content-center">
      <div className="card card-elemento" style={{ width: "250px" }}>
        <div className="card-body bg-light text-dark rounded d-flex justify-content-between align-items-center">
          <h4 className="card-title">Monstera</h4>
          <img src={Hoja} style={{ width: "80px" }} className="p-0" />
        </div>
      </div>
    </div>
  );
};
