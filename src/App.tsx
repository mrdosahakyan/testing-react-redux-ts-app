import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos/Todos";
import Followers from "./pages/Followers/Followers";
import "antd/dist/antd.css";
import { Col } from "antd"; 
import Counter from "./pages/Counter/Counter";

function App() {
  return (
    <Col style={{ padding: "64px 256px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </Col>
  );
}

export default App;
