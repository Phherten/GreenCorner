import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/header.css";
import fondo from "../../img/header_background.jpg";

export const Header = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid header-background">
      <div>
        <img src={fondo} className="header-background-img" />
        <h2 className="header-title">Protege lo que te cuida</h2>
        <h4 className="header-paragrap">
          Nuestro mundo siempre ha sido verde, intentemos expandir este color.
          <br />
          Por eso te ayudamos a cuidar de tus plantas,
          <br />
          porque un hogar lleno de plantas es un lugar lleno de vida.
        </h4>
        <button type="button" class="btn btn-primary header-button-More">
          Saber más
          <i class="fa fa-arrow-right header-icon-arrow"></i>
        </button>
      </div>
    </div>
  );
};
