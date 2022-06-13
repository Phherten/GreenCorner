import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Interior = () => {
  const { store, actions } = useContext(Context);

  return <div>Hola Mundo</div>;
};
