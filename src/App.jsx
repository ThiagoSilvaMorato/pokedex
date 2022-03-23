import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Header } from "./components/Header/index";
import { PokePhoto } from "./components/PokePhoto/index";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<PokePhoto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
