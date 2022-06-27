import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";
import { Link } from "react-router-dom";

export const CardColeccion = (props) => {
  const { store, actions } = useContext(Context);
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
      </div>
    </Link>
  );
};
