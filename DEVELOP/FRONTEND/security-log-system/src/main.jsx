import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";
import './assets/styles/index.css'

import MyAppNav from "./nav";
import WelcomeMessage from "./welcomeMessageCelador";
import Login from "./login";
import ListaRegistros from "./listaRegistros";
import Registrar from "./registroIngreso";       // <-- IMPORTANTE
import WelcomeMessageAdmin from "./welcomeMessageAdmin";
import MyAppNavAdmin from "./navAdmin";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>

      {/* RUTA PRINCIPAL LOGIN*/}
      <Route path="/" element={<Login />} />

      {/* RUTAS CELADOR */}
      <Route path="/security" element={<MyAppNav />} >
        <Route index element={<WelcomeMessage />} />
        <Route path="registro-ingreso" element={<Registrar />} />
        <Route path="lista-registros" element={<ListaRegistros />} />
      </Route>

      {/* RUTAS ADMIN */}
      <Route path="/admin" element={<MyAppNavAdmin />} >
        <Route index element={<WelcomeMessageAdmin />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
