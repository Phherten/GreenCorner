import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Suculentas = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => actions.getMessage("plants"), []);
  let filtrado = store.seccion.filter((object) => object.tipo === "Suculenta");
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="container  mb-xs-1 mb-5">
        <div className="row d-flex justify-content-center mt-4">
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
