import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/navbar.css";
import logo from "../../img/Logo_amarillo.png";
import { BusadorPlantaPorNombre } from "./search";
import { Context } from "../store/appContext";

export const Navbar = () => {
  function handleClick(e) {
    e.preventDefault();
  }
  const { store, actions } = useContext(Context);

  if (store.permiso == true) {
    return (
      <div className="navbar-font home-navbar">
        <nav className="navbar navbar-expand-lg home-navbar">
          <div className="container-fluid">
            <div className="order-0">
              <a className="navbar-brand " href="">
                <button
                  className="navbar-toggler navbar-menu-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target=".dual-collapse2"
                  onClick={handleClick.bind(this)}
                >
                  <i className="fa fa-bars"></i>

                  <span className="navbar-toggler-icon navbar-menu-button-icon"></span>
                </button>
                <img src={logo} className="navbar-logo " />
              </a>
            </div>
            <div className="navbar-collapse collapse w-100 order-1 order-lg-1 dual-collapse2">
              <ul className="navbar-nav me-auto">
                <li>
                  <Link to={"/interior"}>
                    <a className="nav-link navbar-button" href="#">
                      Interior
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/exterior"}>
                    <a className="nav-link navbar-button" href="#">
                      Exterior
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/suculentas"}>
                    <a className="nav-link navbar-button" href="#">
                      Suculentas
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/cuidados"}>
                    <a className="nav-link navbar-button" href="#">
                      Cuidados
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/about"}>
                    <a className="nav-link navbar-button" href="#">
                      Nosotros
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 ">
              <ul className="navbar-nav ms-auto ">
                <li>
                  <div className="navbar-search-button">
                    <BusadorPlantaPorNombre />
                  </div>
                </li>
                <li>
                  <div className="btn-group ">
                    <button
                      type="button"
                      className="btn btn-secondary navbar-user-button dropdown-toggle r"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end navbar-user-twobuttons botons-navbar-search-use">
                      <li>
                        <Link to={"/privada"}>
                          <button
                            className="dropdown-item navbar-button-user-login"
                            type="button"
                          >
                            Mis plantas
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/login"}>
                          <button
                            className="dropdown-item navbar-button-user-login"
                            type="button"
                            onClick={() => {
                              console.log("Entra en logout");
                              actions.logout();
                            }}
                          >
                            Cerrar Sesión
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="navbar-font">
        <nav className="navbar navbar-expand-lg home-navbar">
          <div className="container-fluid">
            <div className="order-0">
              <a className="navbar-brand " href="">
                <button
                  className="navbar-toggler navbar-menu-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target=".dual-collapse2"
                  onClick={handleClick.bind(this)}
                >
                  <i className="fa fa-bars"></i>

                  <span className="navbar-toggler-icon navbar-menu-button-icon"></span>
                </button>
                <img src={logo} className="navbar-logo" />
              </a>
            </div>
            <div className="navbar-collapse collapse w-100 order-1 order-lg-1 dual-collapse2 collapse-menu">
              <ul className="navbar-nav me-auto">
                <li>
                  <Link to={"/interior"}>
                    <a className="nav-link navbar-button" href="#">
                      Interior
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/exterior"}>
                    <a className="nav-link navbar-button" href="#">
                      Exterior
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/suculentas"}>
                    <a className="nav-link navbar-button" href="#">
                      Suculentas
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/cuidados"}>
                    <a className="nav-link navbar-button" href="#">
                      Plagas
                    </a>
                  </Link>
                </li>
                <li>
                  <a className="nav-link navbar-button" href="#">
                    Nosotros
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto ">
                <li>
                  <div class="navbar-search-button">
                    <BusadorPlantaPorNombre />
                  </div>
                </li>
                <li>
                  <div className="btn-group ">
                    <button
                      type="button"
                      className="btn btn-secondary navbar-user-button dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end navbar-user-twobuttons">
                      <li>
                        <Link to={"/login"}>
                          <button
                            className="dropdown-item navbar-button-user-login"
                            type="button"
                          >
                            Iniciar Sesión
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/registro"}>
                          <button
                            className="dropdown-item navbar-button-user-login"
                            type="button"
                          >
                            Registrarse
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};
