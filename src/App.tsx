import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Dialogues from "./components/Dialogues";

function App() {
  return (
    <Routes>
      <Route path="/udv" element={<Auth />} />
      <Route path="/dialogues" element={<Dialogues />} />
    </Routes>
  );
}

export default App;
