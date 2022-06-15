import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/homeMediaPage.css";
import plantasMediaPage from "../../img/foto_plantas_media_pag.jpg";
import plantaInteriorHomeTarjeta from "../../img/planta_tarjeta_home_interior.png";

export const HomeMediaPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid home-media-page">
      <div className="row home-col-media-page-white">
        <div className="col-md-4 home-col-media-page-photo">
          <hr className="media-page-line-h"></hr>

          <img src={plantasMediaPage} className="media-page-plantas" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <div class="card home-col-media-page-card-one">
            <img
              src={plantaInteriorHomeTarjeta}
              className="media-page-planta-tarjetas-interior-foto"
            />
            <div class="card-body">
              <p class="media-page-card-text-interior">Interior</p>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
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
