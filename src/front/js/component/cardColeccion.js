import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/elementos.css";
import "../../styles/cardColeccion.css";
import Hoja from "../../img/hoja.png";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { CalendarModal } from "./CalendarModal.js";
=======
import { Calendar, CalendarModal } from "./CalendarModal";
import { authentication, createEvent } from "./googleCalendar";
import { GoogleLogin } from "react-google-login";
>>>>>>> 79f9a3a (más cambios en calendar)

export const CardColeccion = (props) => {
  const { store, actions } = useContext(Context);

<<<<<<< HEAD
  const handleDelete = (event) => {
    event.preventDefault();
    actions.deletePlantById(props.plant_id);
    props.callback();
=======
  const calendar = (response) => {
    console.log(response);
    createEvent();
  };

  const calendarError = (e) => {
    console.log(e);
    createEvent();
>>>>>>> 79f9a3a (más cambios en calendar)
  };

  return (
    <div
      className="card media-page-tarjetas-interior card-elemento"
      style={{ width: `17rem` }}
    >
      <div>
        <Link to={"/ficha/" + props.id}>
          <img
            src={props.img}
            className="p-0 imagen-card media-page-planta-tarjetas-interior-foto"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h2 className="text-center texto-card mt-4">{props.name} </h2>
            <h3 className="text-center texto-card mt-4">
              "{props.alias !== "" ? props.alias : "Sin alias"}"
            </h3>
            <p className="text-center texto-card mt-4" id="card-coleccion">
              Faltan{" "}
              {props.dias_por_regar > 1
                ? `${props.dias_por_regar} días`
                : `${props.dias_por_regar} día`}{" "}
              para regar
            </p>
          </div>
        </Link>
      </div>
      <div class="d-grid gap-2 m-3 pt-3">
        <CalendarModal
          mostrar={false}
          id={props.id}
          diasRiego={props.dias_por_regar}
        />
        <GoogleLogin
          clientId="801758075621-irv3m4td53cetc4thrp3egbms3dini9n.apps.googleusercontent.com"
          buttonText="Crear notificación en mi Calendar"
          onSuccess={calendar}
          onFailure={calendarError}
          cookiePolicy={"single_host_origin"}
          scope="openid email profile https://www.googleapis.com/auth/calendar"
        />
        <div
          class="g-signin2"
          data-onsuccess={calendar}
          data-onerror={calendarError}
        ></div>

        <button class="btn btn-secondary boton" type="button">
          <h5 className="p-1 pb-0">Eliminar</h5>
        </button>
      </div>
    </div>
  );
};
