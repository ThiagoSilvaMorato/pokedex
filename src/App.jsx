import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Header } from "./components/Header/";
// import { PokePhoto } from "./components/PokePhoto/";
// import { Footer } from "./components/Footer";
// import { SquareBadge } from "./components/SquareBadge";
// import { Badge } from "./components/Badge";
// import { Body } from "./components/Body/index";
// import { Body } from "./components/Body";

import { Home } from "./pages/Home";

import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
