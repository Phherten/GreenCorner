import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  /*return (
    <div class="col-xs col-lg-4 col-xl-3 mb-2 mt-3" key={props.i}>
      <Link
        to={"/ficha/" + props.id}
        className="col-xs col-lg-4 col-xl-3 mb-2 mt-3"
      >
        <div className="card card-elemento" style={{ minWidth: "25rm" }}>
          <div className="card-body bg-light text-dark rounded d-flex justify-content-between align-items-center">
            <h4 className="card-title">{props.name}</h4>
            <img src={props.img} style={{ height: "120px" }} className="p-0" />
          </div>
        </div>
      </Link>
    </div>
  );
};*/

  return (
    <Link
      to={"/ficha/" + props.id}
      className="card media-page-tarjetas-interior card-elemento"
      style={{ width: `17rem` }}
    >
      <img
        src={props.img}
        className="p-0 imagen-card media-page-planta-tarjetas-interior-foto"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h2 className="text-center texto-card mt-4">{props.name} </h2>
        <div class="d-grid gap-2 m-3 pt-3">
          <button class="btn btn-secondary boton" type="button">
            <h5 className="p-1 pb-0">Añadir</h5>
          </button>
        </div>
      </div>
    </Link>
  );
};
