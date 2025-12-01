import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router";
import './assets/styles/index.css'
import MyAppNav from "./nav";
import Login from "./login";
import Ingreso from './registroEquipos'
import Registrar from "./registroIngreso";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/"  element={<Login/>}/>  
      <Route path="/security" element={<MyAppNav/>} >
        <Route path="registro-ingreso"  element={<Registrar/>}/>  
        
    </Route>

    </Routes>
  </BrowserRouter>,

      
     
);
