import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Dialogues from "./components/Dialogues";
import Messages from "./components/Messages";

function App() {
  return (
    <Routes>
      <Route path="/udv" element={<Dialogues />} />
      <Route path="/message/:id/:name" element={<Messages />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
