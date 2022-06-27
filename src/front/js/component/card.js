import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [addPlant, setAddPlant] = useState(false);

  const handleAddPlant = (event) => {
    event.preventDefault();

    actions.addPlant(props.id, event.target.elements.alias.value);

    setAddPlant(false);
  };

  if (store.permiso == true) {
    return (
      <>
        <div
          className="card media-page-tarjetas-interior card-elemento"
          style={{ width: `17rem` }}
        >
          <Link to={"/ficha/" + props.id}>
            <img
              src={props.img}
              className="p-0 imagen-card media-page-planta-tarjetas-interior-foto"
            />
          </Link>

          <div className="card-body d-flex flex-column justify-content-between">
            <h2 className="text-center texto-card mt-4">{props.name} </h2>
            <div class="d-grid gap-2 m-3 pt-3"></div>
            {addPlant ? (
              <form onSubmit={handleAddPlant}>
                <label> alias</label>
                <input name="alias" />
                <button class="btn btn-secondary boton" type="submit">
                  <h5 className="p-1 pb-0">Añadir</h5>
                </button>
              </form>
            ) : (
              <button
                class="btn btn-secondary boton"
                type="button"
                onClick={() => {
                  setAddPlant(true);
                }}
              >
                <h5 className="p-1 pb-0">Añadir</h5>
              </button>
            )}
          </div>
        </div>
      </>
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
