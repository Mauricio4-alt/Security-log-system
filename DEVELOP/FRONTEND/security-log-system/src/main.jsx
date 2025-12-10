import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";
import './assets/styles/index.css'

import MyAppNav from "./nav";
import WelcomeMessage from "./welcomeMessageCelador";
import Login from "./login";
import Registrar from "./registroIngreso";       // <-- IMPORTANTE
import './assets/styles/index.css';
import WelcomeMessageAdmin from "./welcomeMessageAdmin";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />} />  

      <Route path="/security" element={<MyAppNav />} >
        <Route index element={<WelcomeMessage />} />
        <Route path="registro-ingreso" element={<Registrar />} /> 
      </Route>

      <Route path="/admin">
        <Route index element={<WelcomeMessageAdmin/>}/>
 
 
      </Route>

    </Routes>

  </BrowserRouter>
);
