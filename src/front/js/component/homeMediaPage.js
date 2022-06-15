import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/homeMediaPage.css";
import plantasMediaPage from "../../img/foto_plantas_media_pag.jpg";
import plantaInteriorHomeTarjeta from "../../img/planta_tarjeta_home_interior.png";
import plantaRedondaExterior from "../../img/bola_planta_exterior.png";

export const HomeMediaPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid home-media-page">
      <div className="row home-col-media-page-white">
        <div className="col-md-4 home-col-media-page-photo">
          <img src={plantasMediaPage} className="media-page-plantas" />
        </div>
        <div className="col-md-1"></div>
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

        <div className="col-md-3">
          <div class="card mb-3 card-home-col-media-page-card-exterior">
            <div class="row">
              <div class="col-md-12">
                <div>
                  <p class="media-page-card-text-exterior">EXTERIOR</p>{" "}
                </div>
              </div>
            </div>
            <img
              src={plantaRedondaExterior}
              className="media-page-planta-tarjetas-exterior-foto"
            />
            <div class="row">
              <div class="col-md-12">
                <div>
                  <p class="media-page-card-text-suculentas">SUCULENTAS</p>{" "}
                </div>
              </div>
            </div>
            <img
              src={plantaRedondaExterior}
              className="media-page-planta-tarjetas-exterior-foto"
            />
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row home-col-media-page-dark">
        <div className="col-md-1"></div>
        <div className="col-md-2"></div>
        <div className="col-md-1"></div>
        <div className="col-md-4"></div>
        <div className="col-md-1"></div>
        <div className="col-md-2"></div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};
