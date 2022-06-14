import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/homeMediaPage.css";
import plantasMediaPage from "../../img/foto_plantas_media_pag.jpg";

export const HomeMediaPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid home-media-page">
      <div className="row home-col-media-page-white">
        <div className="col-md-3 home-col-media-page-photo">
          <img src={plantasMediaPage} className="media-page-plantas" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3"></div>
        <div className="col-md-1"></div>
        <div className="col-md-3"></div>
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
