import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { ModalCard } from "../component/modal";
import about from "../../img/about.jpg";

export const About = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 p-5">Sobre Nosotros. Y vosotros</div>
        <div className="col-md-5">
          <img src={about} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};
