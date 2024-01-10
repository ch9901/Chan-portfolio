import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Example from "./pages/Example";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project/*" element={<Project />} />
        <Route path="/Example/*" element={<Example />} />
        <Route path="/Aboutme/*" element={<Aboutme />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
