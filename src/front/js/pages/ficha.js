import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ModalCard } from "../component/modal";

import "../../styles/elementos.css";

import { Link, useParams } from "react-router-dom";

export const Ficha = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.resetBusqueda();
    actions.getPlantById(theid);
  }, [theid]);
  if (store.permiso == true) {
    return (
      <>
        <ModalCard estado={store.modal.estado}></ModalCard>

        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xs col-lg-7 fondo-ficha pb-5"
              style={{ minHeight: "700px" }}
            >
              <div className="titulo mt-5 pt-3 ms-5 ps-5 me-5">
                <h1 className="display-3">{store.plant?.nombre_comun}</h1>
              </div>
              <div className="cuerpo ms-5">
                <p className="h5 pb-5 ms-5 ps-5 mt-2">
                  <span className="w400i">
                    {store.plant?.nombre_cientifico}
                  </span>
                </p>
                <p className="h5  ps-4 pe-5 pb-3">
                  {" "}
                  <span className="w400">Abono: </span> {store.plant?.abono}
                </p>
                <p className="h5  ps-4 pe-5 pb-3">
                  {" "}
                  <span className="w400">Luz: </span> {store.plant?.luz}
                </p>
                <p className="h5  ps-4 pe-5 pb-3">
                  {" "}
                  <span className="w400">Frecuencia de riego: </span> En
                  invierno aproximadamente cada {store.plant?.periodo_invierno}{" "}
                  dias y en verano cada {store.plant?.periodo_verano} dias.
                </p>
                <p className="h5 ps-4 pe-5 pb-3">
                  <span className="w400">Consejos de riego: </span>{" "}
                  {store.plant?.riego}
                </p>
                <p className="h5 ps-4 pe-5 pb-3">
                  <span className="w400">Poda: </span> {store.plant?.poda}
                </p>
                <p className="h5 ps-4 pe-5 pb-3">
                  <span className="w400">Transplante: </span>{" "}
                  {store.plant?.trasplante}
                </p>
              </div>
              <Link
                onClick={() =>
                  actions.setModal(true, store.plant?.nombre_comun, theid)
                }
              >
                <div class="d-grid gap-2 m-3 pt-3">
                  <button class="btn btn-secondary mx-5 boton" type="button">
                    <h5 className="p-1 pb-0">Añadir a mis plantas</h5>
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-xs col-lg-5 d-flex justify-content-center imagen-ficha">
              <img
                src={store.plant?.imagen}
                alt="foto plana"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ModalCard estado={store.modal.estado}></ModalCard>

        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xs col-lg-7 fondo-ficha pb-5"
              style={{ minHeight: "700px" }}
            >
              <div className="titulo mt-5 pt-3 ms-5 ps-5 me-5">
                <h1 className="display-3">{store.plant?.nombre_comun}</h1>
              </div>
              <div className="cuerpo ms-5">
                <p className="h5 pb-5 ms-5 ps-5 mt-2">
                  <span className="w400i">
                    {store.plant?.nombre_cientifico}
                  </span>
                </p>
                <p className="h5  ps-4 pe-5 pb-3">
                  {" "}
                  <span className="w400">Abono: </span> {store.plant?.abono}
                </p>
                <p className="h5  ps-4 pe-5 pb-3">
                  {" "}
                  <span className="w400">Luz: </span> {store.plant?.luz}
                </p>
                <p className="h5  ps-4 pe-5 pb-3">
                  {" "}
                  <span className="w400">Frecuencia de riego: </span> En
                  invierno aproximadamente cada {store.plant?.periodo_invierno}{" "}
                  dias y en verano cada {store.plant?.periodo_verano} dias.
                </p>
                <p className="h5 ps-4 pe-5 pb-3">
                  <span className="w400">Consejos de riego: </span>{" "}
                  {store.plant?.riego}
                </p>
                <p className="h5 ps-4 pe-5 pb-3">
                  <span className="w400">Poda: </span> {store.plant?.poda}
                </p>
                <p className="h5 ps-4 pe-5 pb-3">
                  <span className="w400">Transplante: </span>{" "}
                  {store.plant?.trasplante}
                </p>
              </div>
              <Link to={"/login"}>
                <div class="d-grid gap-2 m-3 pt-3">
                  <button class="btn btn-secondary mx-5 boton" type="button">
                    <h5 className="p-1 pb-0">Añadir a mis plantas</h5>
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-xs col-lg-5 d-flex justify-content-center imagen-ficha">
              <img
                src={store.plant?.imagen}
                alt="foto plana"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
};
