import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/header.css";
import fondo from "../../img/fondoNuevoHeader.jpeg";
import logoHeader from "../../img/Logo_letras_amarillo.png";

export const Header = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="container-fluid header-background"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="row p-0 m-0">
        <div className="col-xs p-0 m-0">
          <h2 className="header-title ">Protege lo que te cuida</h2>
          <h4 className="header-paragrap">
            Nuestro mundo siempre ha sido verde, intentemos expandir este color.
            <br />
            Por eso te ayudamos a cuidar de tus plantas,
            <br />
            porque un hogar lleno de plantas es un lugar lleno de vida.
          </h4>
          <div className="header-button-More-arrow">
            <button type="button" className="btn header-button-More">
              Saber más
              <i className="fa fa-arrow-right header-icon-arrow"></i>
            </button>
          </div>
          <div className="row p-0 m-0">
            <div className="col-xs text-center p-0 m-0">
              <img className="header-logoLetrasAmarillo" src={logoHeader} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
