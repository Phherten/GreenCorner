import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Header } from "../component/header";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="header-home">
      <Header />
    </div>
  );
};
