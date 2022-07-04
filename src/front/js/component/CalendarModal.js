import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Button, Modal } from "react-bootstrap";
import "../../styles/CalendarModal.css";
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
  const submit = () => {
    let event = {
      summary: "Google I/O 2015",
      location: "800 Howard St., San Francisco, CA 94103",
      description: "A chance to hear more about Google's developer products.",
      start: {
        dateTime: "2022-07-10T09:00:00-07:00",
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: "2022-07-10T17:00:00-07:30",
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
    publishTheCalenderEvent(event);
  };

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
