import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../component../../../styles/navbar.css";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LOGO
          </a>

          <div className="collapse navbar-collapse navbar-buttons">
            <ul className="navbar-nav me-auto">
              <li className="navbar-interior-button">
                <a className="nav-link navbar-interior-button-2" href="#">
                  Interior
                </a>
              </li>
              <li className="navbar-exterior-button">
                <a className="nav-link navbar-exterior-button2" href="#">
                  Exterior
                </a>
              </li>
              <li className="navbar-suculentas-button">
                <a className="nav-link navbar-suculentas-button2" href="#">
                  Suculentas
                </a>
              </li>
              <li className="navbar-cuidados-button2">
                <a className="nav-link navbar-cuidados-button" href="#">
                  Cuidados
                </a>
              </li>
              <li className="navbar-nosotros-button">
                <a className="nav-link navbar-nosotros-button2" href="#">
                  Nosotros
                </a>
              </li>
            </ul>
            <form class="form-search" method="get" id="s" action="/">
              <div class="input-append">
                <input
                  type="text"
                  class="input-medium search-query"
                  name="s"
                  placeholder="Search"
                  value=""
                />
                <button type="submit" class="add-on nabvar-icon-search">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
