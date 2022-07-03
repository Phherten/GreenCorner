import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/hojas.png";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo_letras_amarillo.png";

import emailjs from "@emailjs/browser";

export const Recuperar = () => {
  const { store, actions } = useContext(Context);
  const [mail, setMail] = useState("");
  const [url, setUrl] = useState("");

  function crearURL() {
    console.log("entra en crearURL");
    let storage = JSON.parse(localStorage.getItem("recuperar"));
    storage = storage.token.substring(265);
    console.log(storage);
    setUrl(
      "https://3000-phherten-finalproyect-gk5ssmsaodu.ws-eu47.gitpod.io/reset/" +
        storage
    );
  }
  useEffect(() => {
    console.log("entra en useEffect");

    localStorage.getItem("recuperar") && crearURL();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uvlatvq",
        "green corner",
        form.current,
        // url,
        "or3vN3YPJ-tAi-TEz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid fondoLogin">
      <div className="logoNav d-flex justify-content-center">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="logo"
            width="220"
            height="110"
            className="logoLogin"
          ></img>
        </Link>
      </div>
      <div id="template-bg-1">
        <div className="d-flex flex-column min-vh-100 align-items-center">
          <div className="card p-4 text-light bg-dark cardLogin mb-5 w-lg-25">
            <div className="card-header">
              <h2>Recuperar Contraseña </h2>
            </div>
            <div className="card-body w-100">
              <form name="login" ref={form} onSubmit={sendEmail}>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="to_email"
                    onChange={(e) => {
                      console.log("entran en onchange");

                      setMail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Enviar Contraseña"
                    className="btn bg-secondary boton float-end text-white w-100"
                    name="login-btn"
                    onClick={() => {
                      console.log("entran en onclick");
                      actions.reset(mail);
                    }}
                  />
                </div>
                <input type="hidden" name="url" id="url" value={url} />
              </form>
              <div className="text-danger"></div>
              <div></div>
              <div className="card-footer">
                <div>
                  <Link to={"/login/"}>
                    <button className="btn btn-transparent botones text-white mt-3 ">
                      ¿Ya estas registrado?
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={"/registro/"}>
                    <button className="btn btn-transparent botones text-white mt-1">
                      Registrate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
