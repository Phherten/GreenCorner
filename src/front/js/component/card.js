import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [estado, setEstado] = useState(false);
  if (store.permiso == true) {
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
          <Link onClick={() => actions.setModal(true, props.name, props.id)}>
            <div class="d-grid gap-2 m-3 pt-3">
              <button class="btn btn-secondary boton" type="button">
                <h5 className="p-1 pb-0">Añadir</h5>
              </button>
            </div>
          </Link>
        </div>
      </Link>
    );
  } else {
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
          <Link to={"/login"}>
            <div class="d-grid gap-2 m-3 pt-3">
              <button class="btn btn-secondary boton" type="button">
                <h5 className="p-1 pb-0">Añadir</h5>
              </button>
            </div>
          </Link>
        </div>
      </Link>
    );
  }
};
