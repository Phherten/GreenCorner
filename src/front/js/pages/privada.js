import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { CardColeccion } from "../component/cardColeccion";

export const Privada = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.privado();
    actions.getPlantsUser();
  }, []);

  return (
    <div>
      <h1>
        {store.permiso ? (
          <>
            {`Bienvenido a tu espacio privado ${store.usuario}`}
            {store.user_plants.map((obj, index) => {
              return (
                <CardColeccion
                  name={obj.info_plant.nombre_comun}
                  id={obj.info_plant.id}
                  i={index}
                  img={obj.info_plant.imagen}
                />
              );
            })}
          </>
        ) : (
          "404 la página no existe"
        )}
      </h1>
    </div>
  );
};
