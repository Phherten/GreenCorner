import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { ModalCard } from "../component/modal";
import about from "../../img/about.jpg";
import ore from "../../img/Ore.png";
import pablo from "../../img/Pablo.png";
import alex from "../../img/Alex.png";
import abril from "../../img/Abril.png";
import "../../styles/about.css";

export const About = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-md-7 p-5">
          <div>
            <h2>Green Corner: el final y el principio de nuestro viaje.</h2>

            <p>
              Somos Ore, Alex, Abril y Pablo, el <i>team</i> encargado de que
              Green Corner hoy sea una realidad.
            </p>

            <p>
              Cuando creamos Green Corner lo hicimos con una idea en mente:
              ayudar a las personas con el cuidado de las plantas de casa. Para
              lograrlo, implementamos una tecnología capaz de enviar avisos
              directamente al móvil que recuerdan la frecuencia de riego exacta
              de cada tipo de planta.
            </p>

            <h5>
              (Ni olvido ni perdón para el último cactus que dejaste morir).
            </h5>

            <p>
              Sabemos que integrar diferentes tipos de plantas, tanto en el
              interior como en el exterior, convierten una estancia anodina en
              un lugar lleno de vida. Pero a menudo olvidamos que para que eso
              ocurra, <strong>cada planta merece un tipo de cuidado.</strong>
            </p>

            <p>
              En Green Corner podrás añadir a tu cuenta de usuario cada una de
              tus plantas (diferenciadas por nombre y clasificación), y la web
              se encargará de recordarte periodos de riego mediante
              notificaciones en Telegram o Google Calendar. De esta forma, tus
              plantas siempre lucirán verdes y bonitas.
            </p>

            <p>
              Este proyecto pone el broche final a nuestra formación como
              desarrolladores, y simboliza un punto de inflexión en nuestras
              carreras:
            </p>

            <h4>
              El final de nuestro viaje como alumnos y el inicio de nuestro
              camino profesional.
            </h4>

            <p>
              Todos venimos de disciplinas bien distintas, así que Green Corner
              nos hace sentir especialmente orgullosos.
            </p>

            <p>
              Nuestro objetivo siempre fue diseñar un proyecto en el que volcar
              lo aprendido en nuestro periodo formativo, y que al mismo tiempo
              pudiera resultar útil para el mundo real.
            </p>

            <p>Y lo logramos</p>

            <h4>No dejes morir tus plantas, únete a Green Corner.</h4>
          </div>
          <div className="btn row mt-5 d-flex justify-content-around">
            <div className="col-md-3 bg-white p-3 " style={{ width: "auto" }}>
              <div>
                <a href="https://www.linkedin.com/in/orealba/">
                  <img src={ore} style={{ width: "150px" }}></img>
                  <p className="text-center mt-2">
                    Orealba
                    <br /> Soriano
                  </p>
                </a>
              </div>
            </div>

            <div className="col-md-3 bg-white p-3 " style={{ width: "auto" }}>
              <div>
                <a href="https://www.linkedin.com/in/aroldanperez/">
                  <img src={alex} style={{ width: "150px" }}></img>
                  <p className="text-center mt-2">
                    Alejandro
                    <br /> Roldán
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-3 bg-white p-3 " style={{ width: "auto" }}>
              <div>
                <a href="https://www.linkedin.com/in/abril-celaya-hernandez-aa65911a5/">
                  <img src={abril} style={{ width: "150px" }}></img>
                  <p className="text-center mt-2">
                    Abril
                    <br /> Hernández
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-3 bg-white p-3 " style={{ width: "auto" }}>
              <div>
                <a href="https://www.linkedin.com/in/pablo-higuera-herten-dev/">
                  <img src={pablo} style={{ width: "150px" }}></img>
                  <p className="text-center mt-2">
                    Pablo
                    <br /> Higuera
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img
            src={about}
            className="img-fluid me-0 foto_about"
            style={{ height: "950px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};
