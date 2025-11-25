import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router";
import './assets/styles/index.css'
import App from "./App";

import Login from "./login";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  >
        <Route path="login"  element={<Login/>}/>  
        <Route path=""  element={<App/>}/>  
      </Route>
    </Routes>
  </BrowserRouter>,
);
