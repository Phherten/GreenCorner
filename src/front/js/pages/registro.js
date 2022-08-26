import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/hojas.png";
import "../../styles/login.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../img/Logo_letras_amarillo.png";
import swal from "sweetalert";
import "../../styles/login.css";

export const Registro = () => {
  const history = useHistory();
  const [shown, setShown] = useState(false);
  // Se crea una segunda variable de estado para el campod e validación de contraseña
  const [shown2, setShown2] = useState(false);
  const { store, actions } = useContext(Context);
  const [datos, setDatos] = useState({
    username: "",
    second_name: "",
    email: "",
    password: "",
  });

  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    {
      event.target.name == "email"
        ? setDatos({
            ...datos,
            [event.target.name]: event.target.value.toLowerCase(),
          })
        : setDatos({
            ...datos,
            [event.target.name]: event.target.value,
          });
    }
  };

  const enviardatos = () => {
    console.log("Entra en enviardatos");
    // verificarcontraseña(datos.password, datos.password2);
    if (pass1 === pass2) {
      // mostrardatos();
      actions.adduser(datos.username, datos.second_name, datos.email, pass1);
      history.push("/login");
    } else {
      return alert("Las contraseñas deben coincidir");
    }
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
              <form
                name="login"
                action=""
                onSubmit={() => {
                  enviardatos();
                }}
              >
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="text"
                    className="form-control input-registro"
                    placeholder="Nombre"
                    name="username"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="text"
                    className="form-control input-registro"
                    placeholder="Apellidos"
                    name="second_name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type="email"
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
                    onChange={(e) => setPass1(e.target.value)}
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

                <div className="input-group form-group mt-3">
                  <div className="bg-secondary rounded-start"></div>
                  <input
                    type={shown2 ? "text" : "password"}
                    className="form-control input-registro-password"
                    placeholder="Confirmar Contraseña"
                    name="password2"
                    onChange={(e) => setPass2(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      shown2 ? setShown2(false) : setShown2(true);
                    }}
                  >
                    {shown2 ? (
                      <i class="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </button>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Registrar"
                    className="btn bg-secondary boton float-end text-white w-100"
                    name="login-btn"
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
