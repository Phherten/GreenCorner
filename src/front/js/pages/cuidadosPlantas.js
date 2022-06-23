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
            summary="Es importante saber algunos cuidados específicos para mejorar la vida de nuestras plantas, para que así puedan vivir sanamente y por mucho tiempo. Por ello te dejamos estos tips que debes tener en cuenta a la hora de cuidarlas:"
          />

          <BodyInfoPlantas
            subTitle="Maceta ideal"
            text="El tamaño de la maceta va a influir en el crecimiento de cualquier planta. Hay diferentes tipos y según sea la planta se verá o no de qué material se puede utilizar.
Las macetas de plástico van a  ayudan a las plantas a tener más humedad, en cambio las de tipo arcilla son ideales para el drenaje."
          ></BodyInfoPlantas>
          <BodyInfoPlantas
            subTitle="Transplantar a tiempo"
            text="La mejor época para hacer el transplante es la primavera. Es recomendable transplantar cuando la planta ha dejado de crecer o cuando las raíces de ésta comiencen a salirse por los agujeros de drenaje.
            Es importante que no se riege hasta por lo menos tres días después de transplantar, debido a que las raíces deben adaptarse a su nuevo hogar."
          ></BodyInfoPlantas>
          <BodyInfoPlantas
            subTitle="Abono"
            text="Existen muchos tipos de abono, es decisión de cada quién si se compra o se hace de forma casera, lo importante es abonar las plantas para que crezcan, estén sanas y fuertes. El tiempo para abonar va a depender de cada tipo de planta."
          ></BodyInfoPlantas>
          <BodyInfoPlantas
            subTitle="Mantenimiento"
            text="Para alargar el ciclo de vida de cada planta hay que hacerle limpieza y poda cada vez que se le marchiten las flores o cuando tenga hojas secas, debido a que éstas le restan nutrientes a la planta. Se recomienda lavar muy bien las tijeras antes de utilizarlas en cada maceta, para que no se contamine ninguna planta."
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
