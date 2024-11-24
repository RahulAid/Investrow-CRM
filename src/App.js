import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./containers/Signin";
import { Home } from "./containers/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
