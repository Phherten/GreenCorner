import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { HeaderInfoPlantas } from "../component/headerInfoPlantas";
import cuidadosPlantasfoto from "../../img/cuidadosPlantasfoto.jpg";
import "../../styles/cuidadosPlantas.css";
import { BodyInfoPlantas } from "../component/bodyInfoPlantas";

export const CuidadosPlantas = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 cuidado-plantas-header-texto">
          <HeaderInfoPlantas
            title="CUIDADO DE PLANTAS"
            summary="Es importante saber algunos puntos para mejorar la vida de nuestras plantas y que así puedan vivir sanamente y por mucho tiempo. Por ello te dejamos estos tips que debes tener en cuenta para a la hora de cuidar de tus plantas."
          />
          <BodyInfoPlantas
            subTitle="Maceta ideal"
            text="El tamaño de la maceta va a influir en el crecimiento de cualquier planta. Hay diferentes tipos y según sea la planta se verá o no de qué material se puede utilizar.
Las macetas de plástico van a  ayudan a las plantas a tener más humedad, en cambio las de tipo arcilla son ideales para el drenaje."
          ></BodyInfoPlantas>
        </div>
        <div className="col-sm-4">
          <img
            className="cuidados-plantas-page-foto"
            src={cuidadosPlantasfoto}
          />
        </div>
      </div>
    </div>
  );
};
