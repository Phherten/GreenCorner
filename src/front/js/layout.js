import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Registro } from "./pages/registro";
import injectContext from "./store/appContext";
import { Interior } from "./pages/interior";
// import { NavbarFondo } from "./component/navbarFondo";
import { Recuperar } from "./pages/recuperar";
import { Exterior } from "./pages/exterior";
import { Suculentas } from "./pages/suculentas";
import { Cuidados } from "./pages/cuidados";
import { Ficha } from "./pages/ficha";
import { Ficha_plagas } from "./pages/ficha_plagas";
import { Privada } from "./pages/privada";
import { Reset } from "./pages/reset";
import { Notificaciones_riego } from "./pages/notificacion_riegos";
import { About } from "./pages/about";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CuidadosPlantas } from "./pages/cuidadosPlantas";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/privada">
              <Navbar />
              <Privada />
            </Route>
            <Route exact path="/notificaciones_riego">
              <Navbar />
              <Notificaciones_riego />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/registro">
              <Registro />
            </Route>
            <Route exact path="/recuperar">
              <Recuperar />
            </Route>
            <Route exact path="/reset/:token">
              <Reset />
            </Route>
            <Route exact path="/ficha/:theid">
              <Navbar />
              <Ficha />
            </Route>
            <Route exact path="/about">
              <Navbar />
              <About />
            </Route>

            <Route exact path="/ficha_plagas/:theid">
              <Navbar />
              <Ficha_plagas />
            </Route>
            <Route exact path="/interior">
              <Navbar />
              <Interior />
            </Route>
            <Route exact path="/exterior">
              <Navbar />
              <Exterior />
            </Route>
            <Route exact path="/suculentas">
              <Navbar />
              <Suculentas />
            </Route>
            <Route exact path="/cuidados">
              <Navbar />
              <Cuidados />
            </Route>
            <Route exact path="/cuidado-plantas">
              <Navbar />
              <CuidadosPlantas />
            </Route>
            <Route exact path="/plagas">
              <Navbar />
              <CuidadosPlantas />
            </Route>
            <Route exact path="/notificaciones-riego">
              <Navbar />
              <CuidadosPlantas />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
