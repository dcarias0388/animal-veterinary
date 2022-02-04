import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import About from "./pages/About";
import Services from "./pages/Services";
import Link from "./pages/Link";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <SideBar />
      <main>
        <Header />
        <div className="main">
          <Route exact path="/" element={App} />
          <Route path="/about" element={About} />
          <Route path="/services/:id" element={Services} />
          <Route path="/link" element={Link} />
          <Route path="/contact" element={Contact} />
        </div>
      </main>
    </>
  );
}

export default App;
