import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CardColeccion } from "../component/cardColeccion";
import "../../styles/home.css";
import { HomeMediaPage } from "../component/homeMediaPage";
import { Header } from "../component/header";

export const Privada = () => {
  const { store, actions } = useContext(Context);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    actions.getPlantsUser();

    actions.privado();
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
      <div className="container d-flex mb-xs-1 mb-5 mt-4 ">
        <div className="row d-flex justify-content-center">
          {store.permiso ? (
            <>
              <h1>{`Mis plantas`}</h1>
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
          ) : (
            "404 la página no existe"
          )}
        </div>
      </div>
    </div>
  );
};
