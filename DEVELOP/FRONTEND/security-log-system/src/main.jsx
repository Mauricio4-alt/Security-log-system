import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router";
import './assets/styles/index.css'

import Login from "./login";
import Layout  from "./layout";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/"  element={<Login/>}/>  
      <Route path="/security" element={<Layout/>} >
        <Route path="registros"/>  
      </Route>
      <Route path="/admin" element={<Layout/>} >
        <Route path="acount"/>  
      </Route>
    </Routes>
  </BrowserRouter>,
);
