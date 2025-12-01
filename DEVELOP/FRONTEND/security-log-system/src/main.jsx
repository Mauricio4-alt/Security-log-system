import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './assets/styles/index.css'

import MyAppNav from "./nav";
import Login from "./login";
import Ingreso from "./registroEquipos";       // <-- IMPORTANTE
import SecurityLayout from "./layout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>

    <Routes>

      {/* RUTA PRINCIPAL */}
      <Route path="/" element={<Login />} />

      {/* RUTA PADRE */}
      <Route path="/security" element={<SecurityLayout/>}>
        <Route path="registro-ingreso" element={<Ingreso />} />
      </Route>

    </Routes>

  </BrowserRouter>
);
