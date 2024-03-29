import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Button, Modal } from "react-bootstrap";
import "../../styles/CalendarModal.css";
import "../../styles/cardColeccion.css";

import {
  signInToGoogle,
  initClient,
  getSignedInUserEmail,
  signOutFromGoogle,
  publishTheCalenderEvent,
} from "./googleCalendar";

export const CalendarModal = (props) => {
  const [show, setShow] = useState(props.mostrar);
  const { store, actions } = useContext(Context);
  const [signedin, setSignedIn] = useState(false);
  const [googleAuthedEmail, setgoogleAuthedEmail] = useState(null);

  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };
  const addToCalendar = (e) => {
    e.stopPropagation();
    setShow(false);
    getAuthToGoogle();
  };
  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  useEffect(() => {
    initClient((success) => {
      if (success) {
        getGoogleAuthorizedEmail();
      }
    });
  }, []);

  const getGoogleAuthorizedEmail = async () => {
    let email = await getSignedInUserEmail();
    if (email) {
      setSignedIn(true);
      setgoogleAuthedEmail(email);
    }
  };
  const getAuthToGoogle = async () => {
    let successfull = await signInToGoogle();
    if (successfull) {
      getGoogleAuthorizedEmail();
      submit();
    }
  };

  const _signOutFromGoogle = () => {
    let status = signOutFromGoogle();
    if (status) {
      setSignedIn(false);
      setgoogleAuthedEmail(null);
    }
  };
  const watering = () => {
    const date = new Date();
    date.setDate(date.getDate() + props.diasRiego);
    date.setHours(8, 0, 0);

    return date.toISOString();
  };

  const recurrence = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    let recurrence =
      "RRULE:FREQ=DAILY;UNTIL=" +
      formatDate(date) +
      ";INTERVAL=" +
      props.diasRiego;

    console.log(recurrence);
    return recurrence;
  };

  const formatDate = (date) => {
    let month = "" + (date.getMonth() + 1),
      day = "" + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("");
  };

  const submit = () => {
    let event = {
      summary: "Riega la planta: " + props.alias,

      description: "Regar la planta " + props.alias,
      start: {
        dateTime: watering(),
        timeZone: "Europe/Madrid",
      },
      end: {
        dateTime: watering(),
        timeZone: "Europe/Madrid",
      },

      recurrence: [recurrence()],

      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };
    publishTheCalenderEvent(event);
  };

  return (
    <>
      <div className="boton-calendar-privada">
        <Button
          className=" btn btn-secondary boton calendar-boton"
          variant="primary"
          onClick={(e) => handleShow(e)}
        >
          Notificar con Calendar
        </Button>
      </div>

      <Modal show={show} onHide={(e) => handleClose(e)}>
        <Modal.Header closeButton>
          <Modal.Title> Notificación de riego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Quieres una notificación de riego para {props.alias} en{" "}
          {props.diasRiego} días en tu Google Calendar?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => addToCalendar(e)}>
            Agregar a mi Calendar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
