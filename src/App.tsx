import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos/Todos";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/followers" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
