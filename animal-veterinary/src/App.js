import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Vinculos from "./pages/Vinculos";
import Contact from "./pages/Contact";
import styled from "styled-components";
import headerBg from "./assets/images/header-bg.png";

const BodyPage1 = styled.body`
  background: url(${headerBg}) center 0 no-repeat;
`;

function App() {
  return (
    <BodyPage1>
      <Header />
      <Routes>
        <Route exact path="/" element={App} />
        <Route path="/about" element={About} />
        <Route path="/services/:id" element={Services} />
        <Route path="/link" element={Vinculos} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </BodyPage1>
  );
}

export default App;
