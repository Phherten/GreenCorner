import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/homeMediaPage.css";
import lineas from "../../img/líneas1.png";
import lineaPequeña from "../../img/foto_plantas_media_pag.jpg";
import plantasMediaPage from "../../img/foto_plantas_media_pag.jpg";
import plantaInteriorHomeTarjeta from "../../img/planta_tarjeta_home_interior.png";
import plantaRedondaExterior from "../../img/bola_planta_exterior.png";
import plantaSuculenta from "../../img/suculentas.png";
import hojaSueltas from "../../img/Hojas_sueltas.png";
import lineaDos from "../../img/líneas2.png";
import florMaceta from "../../img/flormaceta.png";
import plagas from "../../img/plagas.png";
import regadera from "../../img/regadera.png";

export const HomeMediaPage = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="container-fluid p-0 m-0 media-page-container">
        <div className="row p-0 m-0">
          <div className="col-sm-4 p-0 media-page-plant-photo">
            <img src={plantasMediaPage} className="media-page-plantas" />
          </div>
          <div className="col-sm ">
            <div
              className="card media-page-tarjetas-interior"
              style={{ width: `20rem` }}
            >
              <img
                src={plantaInteriorHomeTarjeta}
                className="media-page-planta-tarjetas-interior-foto"
              />
              <div className="card-body">
                <p className="media-page-card-text-interior">INTERIOR</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mb-3 card-home-col-media-page-card-exterior">
              <div className="row  g-0">
                <div className="col-8">
                  <div className="card-body">
                    <p className="card-text media-page-card-text-exterior">
                      EXTERIOR
                    </p>
                  </div>
                </div>

                <div className="col-4 ">
                  <img
                    src={plantaRedondaExterior}
                    className="media-page-planta-tarjetas-exterior-suculenta-foto"
                  />
                </div>
              </div>
            </div>
            <div className="card mb-3 card-home-col-media-page-card-exterior">
              <div className="row  g-0">
                <div className="col-8">
                  <div className="card-body">
                    <p className="card-text media-page-card-text-exterior">
                      SUCULENTAS
                    </p>
                  </div>
                </div>

                <div className="col-4 ">
                  <img
                    src={plantaSuculenta}
                    className="media-page-planta-tarjetas-exterior-suculenta-foto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid home-col-media-page-dark">
        <div className="row">
          <div className="col d-flex justify-content-end">
            <img src={hojaSueltas} className="media-page-planta-suelta" />
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-end">
            <img src={lineaDos} className="media-page-lineas-larga-blancas" />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <h4 className="media-page-text">
              Encuentra información sobre tus plantas
            </h4>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="media-page-cards-cuidados-plagas-notificaciones col-sm m-5 p-5">
            <p className="media-page-card-cuidados-plagas-notificaciones">
              CUIDADO DE PLANTAS
            </p>
            <img
              src={florMaceta}
              className="media-page-planta-tarjetas-cuidados-foto"
            />
          </div>
          <div className="media-page-cards-cuidados-plagas-notificaciones  col-sm m-5 p-5">
            <p className="media-page-card-cuidados-plagas-notificaciones">
              PLAGAS
            </p>
            <img
              src={plagas}
              className="media-page-planta-tarjetas-plagas-foto"
            />
          </div>
          <div className="media-page-cards-cuidados-plagas-notificaciones col-sm  m-5 p-5">
            <p className="media-page-card-cuidados-plagas-notificaciones">
              NOTIFICACIONES DE RIEGO
            </p>
            <img
              src={regadera}
              className="media-page-planta-tarjetas-riego-foto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
