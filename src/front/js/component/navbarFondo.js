import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/navbar.css";
import logo from "../../img/Logo_amarillo.png";

export const NavbarFondo = () => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="navbar-font sombraNavbar">
      <nav className="navbar navbar-expand-lg fondo-navbar">
        <div className="container-fluid ">
          <div class="order-0">
            <a className="navbar-brand " href="">
              <button
                className="navbar-toggler navbar-menu-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".dual-collapse2"
                onClick={handleClick.bind(this)}
              >
                <i class="fa fa-bars"></i>

                <span className="navbar-toggler-icon navbar-menu-button-icon"></span>
              </button>
              <Link to={"/"}>
                <img src={logo} className="navbar-logo" />
              </Link>
            </a>
          </div>
          <div class="navbar-collapse collapse w-100 order-1 order-lg-1 dual-collapse2">
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
                <a className="nav-link navbar-button" href="#">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
          <div class="navbar-collapse collapse w-100 order-3">
            <ul class="navbar-nav ms-auto">
              <li>
                <div class="navbar-search-button">
                  <input
                    type="text"
                    placeholder="Buscar"
                    class="form-control navbar-form-control"
                  />
                  <i class="fa fa-search"></i>
                </div>
              </li>
              <li>
                <div class="btn-group ">
                  <button
                    type="button"
                    class="btn btn-secondary navbar-user-button dropdown-toggle icono-user"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    <i class="fa fa-user"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end navbar-user-twobuttons">
                    <div className="fondo-dropdown bg-light rounded ">
                      <li>
                        <Link to={"/login"}>
                          <button
                            class="dropdown-item navbar-button-user-login dropdown-text pt-3 ps-3 pe-3"
                            type="button"
                          >
                            <p className="text-drop">Iniciar Sesión</p>
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/registro"}>
                          <button
                            class="dropdown-item navbar-button-user-login dropdown-text pb-3"
                            type="button"
                          >
                            Registrarse
                          </button>
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
