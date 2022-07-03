import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Button, Modal } from "react-bootstrap";
import "../../styles/CalendarModal.css";
import { connectToGoogle, initTokenClient } from "./googleCalendar";
import useScript from "react-script-hook";

export const CalendarModal = (props) => {
  const config = {
    clientId:
      "801758075621-irv3m4td53cetc4thrp3egbms3dini9n.apps.googleusercontent.com",
    apiKey: "AIzaSyAGIWjckAE3k4JPOJLmEg9KnxfAio-VSCw",
    scope: "https://www.googleapis.com/auth/calendar.readonly",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };

  const [show, setShow] = useState(props.mostrar);
  const { store, actions } = useContext(Context);

  useScript({
    src: "https://accounts.google.com/gsi/client",
    onload: () => console.log("GSI loaded!"),
  });

  useScript({
    src: "https://apis.google.com/js/api.js",
    onload: () => console.log("GAPI loaded!"),
  });

  let tokenClient;

  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };
  const addToCalendar = (e) => {
    e.stopPropagation();
    setShow(false);
    connectToGoogle(window.gapi);
  };
  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  const initTokenClient = async () => {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: config.clientId,
      scope: config.scope,
      prompt: "",
      callback: "",
    });

    await gapi.client.init({
      apiKey: config.apiKey,
      discoveryDocs: [config.discoveryDocs],
    });
  };

  useEffect(() => {
    /* global google */
    /* global gapi */
    setTimeout(function () {
      // ...
    }, 2000);
    initTokenClient();
  }, []);

  async function addEvent() {
    let response;
    try {
      const event = {
        summary: "Google I/O 2015",
        location: "800 Howard St., San Francisco, CA 94103",
        description: "A chance to hear more about Google's developer products.",
        start: {
          dateTime: "2022-07-05T20:00:00-07:00",
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: "2022-07-05T22:00:00-07:00",
          timeZone: "America/Los_Angeles",
        },
        recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
        attendees: [
          { email: "lpage@example.com" },
          { email: "sbrin@example.com" },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      };

      response = await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
    } catch (err) {
      console.log(err);
      return;
    }
    console.log(response);
  }

  return (
    <>
      <Button
        className="btn-secondary"
        variant="primary"
        onClick={(e) => handleShow(e)}
      >
        <h5 className="p-1 pb-0"> Notificar con Calendar</h5>
      </Button>

      <Modal show={show} onHide={(e) => handleClose(e)}>
        <Modal.Header closeButton>
          <Modal.Title> Notificación de riego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Quieres agregar una notificación de riego en Google Calendar?
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
