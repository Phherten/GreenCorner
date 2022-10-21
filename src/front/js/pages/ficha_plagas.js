import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";
import { Link, useParams } from "react-router-dom";

export const Ficha_plagas = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  let filtrado = store.seccion.filter((object) => object.id == theid);
  console.log(filtrado);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-xs col-lg-7 fondo-ficha pb-5"
          style={{ minHeight: "700px" }}
        >
          <div className="titulo mt-5 pt-3 ms-5 ps-5 me-5">
            <h1 className="display-3">{filtrado[0].nombre}</h1>
          </div>
          <div className="cuerpo ms-5 mt-5 pt-5">
            <p className="h5  ps-4 pe-5 pb-3">
              {" "}
              <span className="w400">Prevención: </span>{" "}
              {filtrado[0].prevencion}
            </p>
            <p className="h5  ps-4 pe-5 pb-3">
              {" "}
              <span className="w400">Síntomas: </span> {filtrado[0].sintomas}
            </p>

            <p className="h5 ps-4 pe-5 pb-3">
              <span className="w400">Tratamiento: </span>{" "}
              {filtrado[0].tratamiento}
            </p>
          </div>
        </div>
        <div className="col-xs col-lg-5 d-flex justify-content-center imagen-ficha">
          <img
            src={filtrado[0].imagen}
            alt="foto plana"
            className="img-fluid"
          ></img>
        </div>
      </div>
    </div>
  );
};
