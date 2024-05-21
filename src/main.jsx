import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import { LanguageProvider } from "./Context/LanguageContext.jsx";
import FormularioInscripcion from "./Pages/FormularioInscripcion.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/formulario-inscripcion"
              element={<FormularioInscripcion />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
