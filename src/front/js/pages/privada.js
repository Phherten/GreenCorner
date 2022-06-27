import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { HomeMediaPage } from "../component/homeMediaPage";
import { Header } from "../component/header";

export const Privada = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      actions.privado();
      setLoad(true);
    }, 3000);

  }, []);

  return (
    <div>
      <h1>
        {store.permiso ? (
          `Bienvenido a tu espacio privado ${store.usuario}`
        ) : load ? (
          "404 la página no existe"
        ) : (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </h1>
    </div>
  );
};
