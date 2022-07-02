import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Reset = () => {
  const { store, actions } = useContext(Context);
  const { token } = useParams();
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const localToken = JSON.parse(localStorage.getItem("recuperar"));

  return (
    <div className="container">
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="nueva clave"
      />
      <button
        onClick={() => {
          actions.resetPass(pass);
        }}
      >
        enviar
      </button>
    </div>
  );
};
