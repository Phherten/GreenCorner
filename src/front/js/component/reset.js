import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo_letras_amarillo.png";
import swal from "sweetalert";

export const Reset = () => {
  const { store, actions } = useContext(Context);
  const { token } = useParams();
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const localToken = JSON.parse(localStorage.getItem("recuperar"));

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
              <form name="login">
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Nueva contraseña"
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="button"
                    value="Enviar Contraseña"
                    className="btn bg-secondary boton float-end text-white w-100"
                    name="login-btn"
                    onClick={() => {
                      actions.resetPass(pass);
                      swal("Contraseña Cambiada");
                    }}
                  />
                </div>
              </form>
              <div className="text-danger"></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
