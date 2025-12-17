import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/index.css";

import MyAppNav from "./nav";
import WelcomeMessage from "./welcomeMessageCelador";
import Login from "./login";
import ListaRegistros from "./listaRegistros";
import ConsultaRegistro from "./consultaRegistro";
import ConsultaHistorial from "./consultaHistorial";
import Registrar from "./registroIngreso";
import WelcomeMessageAdmin from "./welcomeMessageAdmin";
import MyAppNavAdmin from "./navAdmin";
import Funcionarios from "./Funcionarios";
import RegistrosFuncionarios from "./registrosFuncionarios";
import SavePassword from "./savePassword";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>

      {/* LOGIN */}
      <Route path="/" element={<Login />} />
      <Route path="/save-password" element={<SavePassword />} />

      {/* CELADOR */}
      <Route path="/security" element={<MyAppNav />}>
        <Route index element={<WelcomeMessage />} />
        <Route path="registro-ingreso" element={<Registrar />} />
        <Route path="lista-registros" element={<ListaRegistros />} />
        <Route path="consulta-registro" element={<ConsultaRegistro />} />
        <Route path="consulta-historial" element={<ConsultaHistorial />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<MyAppNavAdmin />}>
        <Route index element={<WelcomeMessageAdmin />} />
        <Route path="funcionarios" element={<Funcionarios />} />
        <Route path="lista-registros" element={<ListaRegistros />} />
        <Route path="registros-funcionarios" element={<RegistrosFuncionarios />} />
        <Route path="consulta-historial" element={<ConsultaHistorial />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
