import React, { Component } from "react";
import "../../styles/footer.css";
import logoFooter from "../../img/Logo_letras_amarillo.png";

export const Footer = () => {
  return (
    <div class="container-fluid footer-home">
      <section class="">
        <footer class="text-center text-white">
          <div class="container p-4 pb-0">
            <section class="">
              <div class="d-flex justify-content-center align-items-center">
                <img className="header-logoLetrasAmarillo" src={logoFooter} />
              </div>
            </section>
          </div>

          <div class="text-center p-3 footer-text">
            © 2020 Copyright:
            <a className="text-footer-web" href="https://4geeksacademy.com/">
              4Geeks Academy
            </a>
          </div>
          <section class="mb-4 text-center">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </section>
        </footer>
      </section>
    </div>
  );
};
