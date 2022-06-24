import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { HomeMediaPage } from "../component/homeMediaPage";
import { Header } from "../component/header";

export const Privada = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.privado();
  });

  return (
    <div>
      <h1>
        {store.permiso
          ? `Bienvenido a tu espacio privado ${store.usuario}`
          : "404 la página no existe"}
      </h1>
    </div>
  );
};
