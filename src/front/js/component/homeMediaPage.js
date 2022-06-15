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
    <div className="container-fluid home-media-page">
      <div className="row home-col-media-page-white">
        <div className="col-md-4 home-col-media-page-photo">
          <img src={plantasMediaPage} className="media-page-plantas" />
        </div>
        <div className="col-md-1">
          <img src={lineas} className="media-page-linea-larga" />
        </div>
        <div className="col-md-2">
          <div class="card-home-col-media-page-card-interior">
            <img
              src={plantaInteriorHomeTarjeta}
              className="media-page-planta-tarjetas-interior-foto"
            />
            <div class="card-body">
              <p class="media-page-card-text-interior">INTERIOR</p>
            </div>
          </div>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-3 mt-100">
          <div class="row">
            <div class="col-md-8 card-home-col-media-page-card-exterior ">
              <p class="media-page-card-text-exterior">EXTERIOR</p>{" "}
            </div>
            <div className="col-md-4">
              <img
                src={plantaRedondaExterior}
                className="media-page-planta-tarjetas-exterior-foto"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 card-home-col-media-page-card-suculentas">
              <p class="media-page-card-text-suculentas">SUCULENTAS</p>{" "}
            </div>
            <div className="col-md-4">
              <img
                src={plantaSuculenta}
                className="media-page-planta-tarjetas-suculentas-foto"
              />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="home-col-media-page-dark">
        <img src={hojaSueltas} className="media-page-planta-suelta" />
        <div>
          <img src={lineaDos} className="media-page-lineas-larga-blancas" />

          <h4 className="media-page-text">
            Encuentra información sobre tus plantas
          </h4>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div class="card-home-media-page-card-cuidado-plantas">
              <div class="card-body">
                <p class="media-page-card-cuidados-plagas-notificaciones">
                  CUIDADO DE PLANTAS
                </p>
              </div>
              <img
                src={florMaceta}
                className="media-page-planta-tarjetas-cuidados-foto"
              />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div class="card-home-media-page-card-plagas">
              <div class="card-body">
                <p class="media-page-card-cuidados-plagas-notificaciones">
                  PLAGAS
                </p>
              </div>
            </div>
            <img
              src={plagas}
              className="media-page-planta-tarjetas-plagas-foto"
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div class="card-home-media-page-card-cuidado-plantas">
              <div class="card-body">
                <p class="media-page-card-cuidados-plagas-notificaciones">
                  NOTIFICACIONES DE RIEGO
                </p>
              </div>
              <img
                src={regadera}
                className="media-page-planta-tarjetas-riego-foto"
              />
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};
