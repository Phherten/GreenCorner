import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/hojas.png";
import "../../styles/login.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../img/Logo_letras_amarillo.png";

export const Login = () => {
  const history = useHistory();
  const [shown, setShown] = useState(false);

  const [error, guardarError] = useState(false);

  const { store, actions } = useContext(Context);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviardatos = (e) => {
    console.log("Entra en enviardatos");
    actions.loguser(datos.email, datos.password);
    e.preventDefault();
    // actualizarUsuarioLogeado(true);
    guardarError(false);
    history.push("/privada"); // <-- Objeto history
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
        <div className="d-flex flex-column min-vh-100  align-items-center">
          <div className="card p-4 text-light bg-dark cardLogin mb-5 w-lg-25">
            <div className="card-header">
              <h2>Iniciar sesión </h2>
            </div>
            <div className="card-body w-100">
              <form name="login" onSubmit={enviardatos}>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="text"
                    className="form-control input-registro"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type={shown ? "text" : "password"}
                    className="form-control input-registro-password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      shown ? setShown(false) : setShown(true);
                    }}
                  >
                    {shown ? (
                      <i class="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </button>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Acceder"
                    className="btn bg-secondary boton float-end text-white w-100"
                    name="login-btn"
                  />
                </div>
              </form>
              <div className="text-danger"></div>
              <div></div>
              <div className="card-footer">
                <div>
                  <Link to={"/recuperar/"}>
                    <button className="btn btn-transparent botones text-white mt-3">
                      Olvidaste la contraseña
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
