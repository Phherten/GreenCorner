import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Button, Modal } from "react-bootstrap";

export const CalendarModal = (props) => {
  const [show, setShow] = useState(props.mostrar);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(false);
  };

  const handleShow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(true);
  };

  return (
    <>
      <Button variant="primary" onClick={(e) => handleShow(e)}>
        Notificación
      </Button>

      <Modal show={show} backdrop="static" onHide={(e) => handleClose(e)}>
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
          <Button variant="primary" onClick={(e) => handleClose(e)}>
            Crear notificación en mi Calendar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
