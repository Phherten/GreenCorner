import React, { Component } from "react";
import "../../styles/footer.css";
import logoFooter from "../../img/Logo_letras_amarillo.png";

export const Footer = () => {
  return (
    <div className="container-fluid footer-home">
      <section className="">
        <footer className="text-center text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="d-flex justify-content-center align-items-center">
                {/* <img className="header-logoLetrasAmarillo" src={logoFooter} /> */}
              </div>
            </section>
          </div>

          <section className="enlaces-footer">
            <a className="texto-enlaces">Contacto</a>
            <a className="texto-enlaces">Política de privacidad</a>
            <a className="texto-enlaces">Acerca de</a>
          </section>
          <hr></hr>

          <section className="logos mb-4 text-center">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>
          <div className="text-center p-3 footer-text">
            © 2022 Copyright:
            <a className="text-footer-web" href="https://4geeksacademy.com/">
              Green Corner
            </a>
          </div>
          {/* logos RRHH */}
        </footer>
      </section>
    </div>
  );
};
