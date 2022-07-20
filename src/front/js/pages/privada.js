import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CardColeccion } from "../component/cardColeccion";
import "../../styles/home.css";
import "../../styles/privada.css";
import { HomeMediaPage } from "../component/homeMediaPage";
import { Header } from "../component/header";
import { Link } from "react-router-dom";
import planta_maceta_privada from "../../img/planta_maceta_privada.jpg";

export const Privada = () => {
  const { store, actions } = useContext(Context);

  const [shouldRefresh, setShouldRefresh] = useState(false);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      actions.privado();
      actions.getPlantsUser();
      setLoad(true);
    }, 3000);
  }, []);

  useEffect(() => {
    actions.getPlantsUser();
  }, [shouldRefresh]);

  const callbackDelete = () => {
    setShouldRefresh(!shouldRefresh);
  };

  const calculateDays = (plant) => {
    let summerMonths = [4, 5, 6, 7, 8, 9];

    let date = new Date();
    let mesActual = date.getMonth() + 1;
    let periodo;
    if (summerMonths.includes(mesActual)) {
      periodo = plant.info_plant.periodo_verano;
    } else {
      periodo = plant.info_plant.periodo_invierno;
    }

    let registro = new Date(plant.fecha_registro);
    let diasRestantes = Math.abs(registro - date);
    let dias = Math.round(diasRestantes / (1000 * 3600 * 24));
    return periodo - (dias % periodo);
  };

  return (
    <div style={{ minHeight: "800px" }}>
      <div className="container d-flex mb-xs-1 mb-5 mt-4 justify-content-center">
        <div className="row d-flex justify-content-center row-privada">
          {store.permiso ? (
            <>
              {store.user_plants.length === 0 ? (
                <>
                  <div className="imagen_privada">
                    <p className="texto_privada">
                      Todavía no tienes plantas guardadas,<br></br>
                      ¿Empezamos a cuidarlas juntos?
                    </p>

                    <Link to={"/#plants"}>
                      <button
                        class="btn btn-secondary boton"
                        type="button"
                        id="boton_privada"
                      >
                        Agrega tu primera planta
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {store.user_plants.map((plant, index) => {
                    let dias_por_regar = calculateDays(plant);

                    return (
                      <CardColeccion
                        name={plant.info_plant.nombre_comun}
                        alias={plant.alias}
                        id={plant.info_plant.id}
                        plant_id={plant.id}
                        i={index}
                        img={plant.info_plant.imagen}
                        dias_por_regar={dias_por_regar}
                        callback={callbackDelete}
                      />
                    );
                  })}
                </>
              )}
            </>
          ) : load ? (
            "404 la página no existe"
          ) : (
            <div
              className="d-flex align-items-center"
              style={{ minHeight: "600px" }}
            >
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
