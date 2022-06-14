import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { HomeMediaPage } from "../component/homeMediaPage";
import { Header } from "../component/header";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Header />
      <HomeMediaPage />
    </div>
  );
};
