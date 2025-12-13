import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./lib/i18n"; 
import Navbar from "./sections/navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);