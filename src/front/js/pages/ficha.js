import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import Hoja from "../../img/hoja.png";
import { Link, useParams } from "react-router-dom";

export const Ficha = (props) => {
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
            <h1 className="display-3">{filtrado[0].nombre_comun}</h1>
          </div>
          <div className="cuerpo ms-5">
            <p className="h5 pb-5 ms-5 ps-5 mt-2">
              <span className="w400i">{filtrado[0].nombre_cientifico}</span>
            </p>
            <p className="h5  ps-4 pe-5 pb-3">
              {" "}
              <span className="w400">Abono: </span> {filtrado[0].abono}
            </p>
            <p className="h5  ps-4 pe-5 pb-3">
              {" "}
              <span className="w400">Luz: </span> {filtrado[0].luz}
            </p>
            <p className="h5  ps-4 pe-5 pb-3">
              {" "}
              <span className="w400">Frecuencia de riego: </span> En invierno
              aproximadamente cada {filtrado[0].periodo_invierno} dias y en
              verano cada {filtrado[0].periodo_verano} dias.
            </p>
            <p className="h5 ps-4 pe-5 pb-3">
              <span className="w400">Consejos de riego: </span>{" "}
              {filtrado[0].riego}
            </p>
            <p className="h5 ps-4 pe-5 pb-3">
              <span className="w400">Poda: </span> {filtrado[0].poda}
            </p>
            <p className="h5 ps-4 pe-5 pb-3">
              <span className="w400">Transplante: </span>{" "}
              {filtrado[0].trasplante}
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
