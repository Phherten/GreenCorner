import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/header.css";
import fondo from "../../img/fondoNuevoHeader.jpeg";
import logoHeader from "../../img/Logo_letras_amarillo.png";

export const Header = () => {
  const { store, actions } = useContext(Context);

  return (
    /*<div
      className="container-fluid header-background"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="row p-0 m-0">
        <div className="col-12 p-0 m-0">
          <h2 className="header-title ">Protege lo que te cuida</h2>
          <h4 className="header-paragrap">
            Nuestro mundo siempre ha sido verde, intentemos expandir este color.
            <br />
            Por eso te ayudamos a cuidar de tus plantas,
            <br />
            porque un hogar lleno de plantas es un lugar lleno de vida.
          </h4>
          <div className="row d-flex justify-center">
            <div className="header-button-More-arrow">
              <button type="button" className="btn header-button-More">
                Saber más
                <i className="fa fa-arrow-right header-icon-arrow"></i>
              </button>
            </div>
          </div>




          <div className="row p-0 m-0">
            <div className="col-12 text-center p-0 m-0">
              <img className="header-logoLetrasAmarillo" src={logoHeader} />
            </div>
          </div>
        </div>
      </div> 
    </div>*/

    <div
      className="header-background"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="container-fluid">
        img fondo
        <div className="row d-flex justify-items-center">
          <div className="col-4 mx"></div>
          <div className="col-4 mx">
            <img
              className="header-logoLetrasAmarillo mx-auto"
              src={logoHeader}
            />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mx-16">
          <div className="col-12">
            <p className="header-title">Protege lo que te cuida</p>
          </div>
          <div className="col-12">
            <p className="header-paragraph">
              Nuestro mundo siempre ha sido verde, intentemos expandir este
              color. Por eso te ayudamos a cuidar de tus plantas, porque un
              hogar lleno de plantas es un lugar lleno de vida.
            </p>
          </div>
          <div className="col"></div>
          <div className="col-2 text-right">
            <a href="#" className="header-button-More">
              Saber más
              <span>
                <i className="fa fa-arrow-right header-icon-arrow"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
