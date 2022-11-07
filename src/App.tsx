import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return (
    <Routes>
      <Route path="/udv" element={<Auth />} />
    </Routes>
  );
}

export default App;
