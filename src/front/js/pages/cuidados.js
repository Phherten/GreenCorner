import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Cuidados = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => actions.getMessage("plagas"), []);
  console.log(store.seccion);
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="container d-flex mb-xs-1 mb-5">
        <div className="row d-flex justify-content-center">
          {store.seccion.map((obj, index) => {
            return <Card name={obj.nombre} i={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
