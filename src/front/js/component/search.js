import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const BusadorPlantaPorNombre = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        class="form-control navbar-form-control"
        onChange={(event) => {
          if (event.target.value.length >= 3) {
            actions.getInfoPlantByNombreParcial(event.target.value);
          }
        }}
      />
      <i className="fa fa-search"></i>
      <ul>
        {store.busqueda.map((plant) => {
          return (
            <li>
              <Link to={`/ficha/${plant.id}`}>{plant.nombre_comun}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
