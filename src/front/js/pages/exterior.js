import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Exterior = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => actions.getMessage("plants"), []);
  let filtrado = store.seccion.filter((object) => object.tipo === "Exterior");
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="container  mb-xs-1 mb-5 mt-4">
        <div className="row d-flex justify-content-center">
          {filtrado.map((obj, index) => {
            return (
              <Card
                name={obj.nombre_comun}
                i={index}
                img={obj.imagen}
                id={obj.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
