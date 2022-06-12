import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/navbar.css";
import logo from "../../img/Logo_amarillo.png";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg home-navbar">
        <div className="container-fluid">
          <div class="order-0">
            <a className="navbar-brand" href="">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".dual-collapse2"
                onClick={handleClick.bind(this)}
              >
                <span className="navbar-toggler-icon"></span>
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
                    class="form-control"
                  />
                  <i class="fa fa-search"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
