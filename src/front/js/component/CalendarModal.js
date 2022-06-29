import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Button, Modal } from "react-bootstrap";
import "../../styles/CalendarModal.css";

export const CalendarModal = (props) => {
  const [show, setShow] = useState(props.mostrar);
  const { store, actions } = useContext(Context);
  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };

  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  const calendar = async (e) => {
    e.stopPropagation();
    await authentication();
    setShow(false);
    createEvent();
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
          <Button variant="primary" onClick={(e) => calendar(e)}>
            Crear notificación en mi Calendar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
