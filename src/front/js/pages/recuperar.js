import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/hojas.png";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo_letras_amarillo.png";

export const Recuperar = () => {
  const { store, actions } = useContext(Context);
  const [mail, setMail] = useState("");
  // const [url, setUrl] = useState("");

  // function crearURL() {
  //   console.log("entra en crearURL");
  //   let storage = JSON.parse(localStorage.getItem("recuperar"));
  //   storage = storage.token.substring(0, 10);
  //   setUrl(
  //     "https://3001-phherten-finalproyect-gk5ssmsaodu.ws-eu47.gitpod.io/reset/" +
  //       storage
  //   );
  // }
  // useEffect(() => {
  //   console.log("entra en useEffect");

  //   localStorage.getItem("recuperar") && crearURL();
  // }, []);

  return (
    <div className="text-center mt-5">
      <h1>reset pass!!</h1>
      <input
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      ingrese mail
      <button
        onClick={() => {
          actions.reset(mail);
        }}
      >
        enviar
      </button>
      {/* {url} */}
    </div>
  );

  // return (
  //   <div className="container-fluid fondoLogin">
  //     <div className="logoNav d-flex justify-content-center">
  //       <Link to={"/"}>
  //         <img
  //           src={Logo}
  //           alt="logo"
  //           width="220"
  //           height="110"
  //           className="logoLogin"
  //         ></img>
  //       </Link>
  //     </div>
  //     <div id="template-bg-1">
  //       <div className="d-flex flex-column min-vh-100 align-items-center">
  //         <div className="card p-4 text-light bg-dark cardLogin mb-5 w-lg-25">
  //           <div className="card-header">
  //             <h2>Recuperar Contraseña </h2>
  //           </div>
  //           <div className="card-body w-100">
  //             <form name="login">
  //               <div className="input-group form-group mt-3">
  //                 <div className="bg-secondary rounded-start"></div>
  //                 <input
  //                   type="email"
  //                   className="form-control"
  //                   placeholder="Email"
  //                   name="username"
  //                   onChange={(e) => {
  //                     console.log("entran en onchange");

  //                     setMail(e.target.value);
  //                   }}
  //                 />
  //               </div>
  //               {/* {url} */}
  //               <div className="form-group mt-3">
  //                 <button
  //                   // type="submit"
  //                   // value="Enviar Contraseña"
  //                   className="btn bg-secondary boton float-end text-white w-100"
  //                   name="login-btn"
  //                   onClick={() => {
  //                     console.log("entran en onclick");
  //                     actions.reset(mail);
  //                   }}
  //                 >
  //                   enviar
  //                 </button>
  //               </div>
  //             </form>
  //             <div className="text-danger"></div>
  //             <div></div>
  //             <div className="card-footer">
  //               <div>
  //                 <Link to={"/login/"}>
  //                   <button className="btn btn-transparent botones text-white mt-3 ">
  //                     ¿Ya estas registrado?
  //                   </button>
  //                 </Link>
  //               </div>
  //               <div>
  //                 <Link to={"/registro/"}>
  //                   <button className="btn btn-transparent botones text-white mt-1">
  //                     Registrate
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
