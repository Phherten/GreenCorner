import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/hojas.png";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo_letras_amarillo.png";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [datos, setDatos] = useState({
    username: "",
    second_name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      "enviando datos..." +
        datos.username +
        " " +
        datos.second_name +
        " " +
        datos.email +
        " " +
        datos.password
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
              <h2>Registro </h2>
            </div>
            <div className="card-body w-100">
              <form name="login" action="" onSubmit={enviarDatos}>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="username"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellidos"
                    name="second_name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar Contraseña"
                    name="password"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Registrar"
                    className="btn bg-secondary boton float-end text-white w-100"
                    name="login-btn"
                    onClick={() => {
                      actions.adduser(
                        datos.username,
                        datos.second_name,
                        datos.email,
                        datos.password
                      );
                    }}
                  />
                </div>
              </form>
              <div className="text-danger"></div>
              <div></div>
              <div className="card-footer d-flex justify-content-center">
                <div>
                  <Link to={"/login/"}>
                    <button className="btn btn-transparent botones text-white mt-3 ">
                      ¿Ya estas registrado?
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
