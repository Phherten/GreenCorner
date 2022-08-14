import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const BusadorPlantaPorNombre = () => {
  const { store, actions } = useContext(Context);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {}, [isSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        className="form-control navbar-form-control"
        onChange={(event) => {
          setIsSearch(!isSearch);

          if (event.target.value.length >= 3) {
            actions.getInfoPlantByNombreParcial(event.target.value);
          } else {
            actions.resetBusqueda();
          }
        }}
      />
      <i className="fa fa-search"></i>
      <ul id="ul-buscador">
        {" "}
        {!store.busqueda.length
          ? ""
          : store.busqueda.map((plant) => {
              return (
                <li id="li-buscador">
                  <Link to={`/ficha/${plant.id}`}>{plant.nombre_comun}</Link>
                </li>
              );
            })}
        {}
      </ul>
    </div>
  );
};
