import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card_plagas } from "../component/card_plagas";

export const Cuidados = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => actions.getMessage("plagas"), []);
  console.log(store.seccion);
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="container d-flex mb-xs-1 mb-5 mt-4">
        <div className="row d-flex justify-content-center">
          {store.seccion.map((obj, index) => {
            return (
              <Card_plagas
                name={obj.nombre}
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
