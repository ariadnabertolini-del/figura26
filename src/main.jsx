import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./componentes/inicio.jsx";
import Jugadores from "./componentes/jugadore.jsx";
import Grupos from "./componentes/grupos.jsx";
import Escudos from "./componentes/escudos.jsx";
import CocaCola from "./componentes/cocacola.jsx"; // Importamos CocaCola
import EspecialesFWC from "./componentes/fwc.jsx"; // Importamos FWC


import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/escudos" element={<Escudos />} />
        <Route path="/cocacola" element={<CocaCola />} />
        <Route path="/fwc" element={<EspecialesFWC />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);