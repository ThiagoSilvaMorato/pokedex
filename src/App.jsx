import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Header } from "./components/Header/";
// import { PokePhoto } from "./components/PokePhoto/";
// import { Footer } from "./components/Footer";
import { SquareBadge } from "./components/SquareBadge";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<SquareBadge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
