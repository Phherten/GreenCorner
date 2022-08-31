import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/navbar.css";
import logo from "../../img/Logo_amarillo.png";
import fondoNav from "../../img/fondoNavbar.jpeg";

import { BusadorPlantaPorNombre } from "./search";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShow(!show);
  }

  const setClasses = () => {
    return show
      ? "navbar-collapse collapse w-100 order-1 order-lg-1 dual-collapse2 collapse-menu show"
      : "navbar-collapse collapse w-100 order-1 order-lg-1 dual-collapse2 collapse-menu";
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !event.target.className.includes("collapse-icon")
        ) {
          setShow(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      className="navbar-font fondo-navbar"
      style={{ backgroundImage: `url(${fondoNav})` }}
    >
      <nav className="navbar navbar-expand-lg home-navbar">
        <div className="container-fluid">
          <div className="order-0">
            <div className="navbar-brand " href="">
              <button
                className="navbar-toggler navbar-menu-button collapse-icon"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".dual-collapse2"
                onClick={handleClick.bind(this)}
              >
                <i className="fa fa-bars collapse-icon"></i>

                <span className="navbar-toggler-icon navbar-menu-button-icon collapse-icon"></span>
              </button>
              <Link
                to={"/"}
                onClick={() => setShow(false)}
                className="collapse-icon"
              >
                <img src={logo} className="navbar-logo collapse-icon" />
              </Link>
            </div>
          </div>
          <div className={setClasses()} ref={wrapperRef}>
            <ul className="navbar-nav me-auto">
              <li>
                <Link to={"/interior"} onClick={() => setShow(false)}>
                  <a className="nav-link navbar-button" href="#">
                    Interior
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/exterior"} onClick={() => setShow(false)}>
                  <a className="nav-link navbar-button" href="#">
                    Exterior
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/suculentas"} onClick={() => setShow(false)}>
                  <a className="nav-link navbar-button" href="#">
                    Suculentas
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/cuidados"} onClick={() => setShow(false)}>
                  <a className="nav-link navbar-button" href="#">
                    Plagas
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/about"} onClick={() => setShow(false)}>
                  <a className="nav-link navbar-button" href="#">
                    Nosotros
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto ">
              <li>
                <div class="navbar-search-button">
                  <BusadorPlantaPorNombre />
                </div>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="btn-group order-2">
            <button
              type="button"
              className="btn btn-secondary navbar-user-button dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              <i className="fa fa-user"></i>
            </button>
            {store.permiso ? (
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
            ) : (
              <ul className="dropdown-menu dropdown-menu-end navbar-user-twobuttons">
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
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
