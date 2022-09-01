import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/elementos.css";
import "../../styles/cardColeccion.css";
import { Link } from "react-router-dom";
import { CalendarModal } from "./CalendarModal.js";
import { ModalEditarAlias } from "../component/modalEditarAlias";
import swal from "sweetalert";

export const CardColeccion = (props) => {
  const { store, actions } = useContext(Context);

  let chatId = store.chat_id;
  let array = store.arrayTelegram;
  let hoy = new Date();
  const [notificacionTelegram, setNotificiacionTelegram] = useState("No");

  function consultarTelegram(chat_id, msg) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      chat_id: sessionStorage.getItem("chat_id"),
      msg: "Riega tu " + (props.alias ? props.alias : props.name),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BACKEND_URL + "/api/consultar_telegram", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.Message);
        setNotificiacionTelegram(result.Message);
      })

      .catch((error) => console.log("error", error));
  }

  function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  console.log("la notificaciones existe?: " + notificacionTelegram);

  function guardarNotificacion() {
    actions.add_notificacion_telegram(
      "Riega tu " + (props.alias ? props.alias : props.name),
      props.dias_por_regar,
      sumarDias(hoy, props.dias_por_regar)
    );
  }
  function buscar() {
    for (const i in array) {
      {
        if (array[i].hasOwnProperty("message")) {
          if (
            array[i].message.text.toLowerCase() ==
            sessionStorage.getItem("email")
          ) {
            chatId = array[i].message.chat.id;
            actions.saveChatId(chatId);
            sessionStorage.setItem("chat_id", chatId);
          }
        }
      }
    }
  }

  useEffect(() => {
    actions.getChatId();
    actions.searchChatId();
    consultarTelegram();
    setTimeout(buscar(), 500);
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();
    actions.deletePlantById(props.plant_id);
    props.callback();
  };

  return (
    <div className="flex-container">
      <div className="card-privada">
        <Link to={"/ficha/" + props.id}>
          <img src={props.img} className="imagen-card-privada " />
          <div className="body-card-privada ">
            <h2 className="texto-card-privada ">{props.name} </h2>
            <h3 className="texto-card-privada texto-alias ">
              "{props.alias !== "" ? props.alias : "Sin alias"}"
              <Link
                onClick={() =>
                  actions.setModal(true, props.name, props.plant_id)
                }
              >
                <button class="boton-editar" type="button">
                  <i class="fas fa-pen"></i>
                </button>
              </Link>
            </h3>
            <p className="texto-card-privada " id="card-coleccion1">
              Faltan{" "}
              {props.dias_por_regar > 1
                ? `${props.dias_por_regar} días`
                : `${props.dias_por_regar} día`}{" "}
              para regar
            </p>
          </div>
        </Link>

        <div className="boton-telegram-privada">
          <CalendarModal
            mostrar={false}
            id={props.id}
            diasRiego={props.dias_por_regar}
            alias={props.alias !== "" ? props.alias : props.name}
          />
          {notificacionTelegram == "Si" ? (
            <button
              className=" btn btn-danger boton telegram-boton"
              variant="primary"
              onClick={() => {
                actions.deleteTelegram(
                  sessionStorage.getItem("chat_id"),
                  "Riega tu " + (props.alias ? props.alias : props.name)
                );
                swal({
                  title: "La notificacion se ha eliminado",
                  icon: "error",
                });
                setNotificiacionTelegram("No");
              }}
            >
              Eliminar Notificacion
            </button>
          ) : (
            <button
              className="btn btn-secondary boton telegram-boton"
              variant="primary"
              onClick={() => {
                buscar();
                chatId
                  ? swal({
                      title:
                        "¿Deseas añadir una alerta de riego para esta planta?",
                      buttons: ["No", "Si"],
                    }).then((respuesta) => {
                      if (respuesta == true) {
                        guardarNotificacion();
                        setNotificiacionTelegram("Si");

                        swal({
                          text: "La notificacion se ha añadido",
                          icon: "success",
                        });
                      }
                    })
                  : swal({
                      title:
                        "Para usar las notificaciones de Telegram tienes que registrar tu correo siguiendo las instrucciones, ¿deseas ver las instrucciones?",
                      buttons: ["No", "Si"],
                    }).then((respuesta) => {
                      if (respuesta == true) {
                        swal({
                          title:
                            "Abre telegram en tu telefono y busca Greencornerproyect_bot. Pulsa Start y envianos un mensaje con el mismo correo que has usado en nuestra pagina. Refresca esta pagina",
                          icon: "info",
                        });
                      }
                    });
              }}
            >
              Notificar con Telegram
            </button>
          )}
        </div>

        <Link onClick={handleDelete}>
          <div class="boton-eliminar-privada">
            <button
              class="btn btn-secondary boton eliminar-boton"
              type="button"
            >
              Eliminar
            </button>
          </div>
        </Link>
      </div>
      <ModalEditarAlias
        estado={store.modal.estado}
        callback={props.callback}
      ></ModalEditarAlias>
    </div>
  );
};
