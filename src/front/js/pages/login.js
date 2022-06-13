import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/hojas.png";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo_letras_amarillo.png";

export const Login = () => {
  const { store, actions } = useContext(Context);

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
              <form name="login" action="" method="post">
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start">
                    <span className="m-3">
                      <i className="fas fa-user mt-2"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario"
                    name="username"
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start">
                    <span className="m-3">
                      <i className="fas fa-key mt-2"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                  />
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
                  <Link to={"/demo/"}>
                    <button className="btn btn-transparent botones text-white mt-3">
                      Olvidaste la contraseña
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={"/registro/"}>
                    <button className="btn btn-transparent botones text-white mt-1">
                      Registrar
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
