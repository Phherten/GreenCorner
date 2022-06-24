import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { HomeMediaPage } from "../component/homeMediaPage";
import { Header } from "../component/header";

export const Privada = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>HOLA, ESTA ES UNA PAGINA PRIVADA</h1>
    </div>
  );
};
