import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/navbar.css";
import logo from "../../img/Logo_amarillo.png";

export const Navbar = () => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="navbar-font">
      <nav className="navbar navbar-expand-lg home-navbar">
        <div className="container-fluid">
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
              <img src={logo} className="navbar-logo" />
            </a>
          </div>
          <div class="navbar-collapse collapse w-100 order-1 order-lg-1 dual-collapse2">
            <ul className="navbar-nav me-auto">
              <li>
                <a className="nav-link navbar-button" href="#">
                  Interior
                </a>
              </li>
              <li>
                <a className="nav-link navbar-button" href="#">
                  Exterior
                </a>
              </li>
              <li>
                <a className="nav-link navbar-button" href="#">
                  Suculentas
                </a>
              </li>
              <li>
                <a className="nav-link navbar-button" href="#">
                  Cuidados
                </a>
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
                    class="btn btn-secondary navbar-user-button dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    <i class="fa fa-user"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end navbar-user-twobuttons">
                    <li>
                      <Link to={"/login"}>
                        <button
                          class="dropdown-item navbar-button-user-login"
                          type="button"
                        >
                          Iniciar Sesión
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/registro"}>
                        <button
                          class="dropdown-item navbar-button-user-login"
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
};
