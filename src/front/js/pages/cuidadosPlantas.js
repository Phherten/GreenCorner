import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { HeaderInfoPlantas } from "../component/headerInfoPlantas";
import cuidadosPlantasfoto from "../../img/cuidadosPlantasfoto.jpg";
import "../../styles/cuidadosPlantas.css";

export const CuidadosPlantas = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 cuidado-plantas-header-texto">
          <HeaderInfoPlantas
            title="CUIDADO DE PLANTAS"
            summary="Es de suma importancia saber algunos puntos importantes para mejorar la vida de nuestras plantas y que así puedan vivir sanamente y por mucho tiempo. Por ello te damos algunos tips que debes tener en cuenta para a la hora de cuidar de tus plantas."
          />
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
