import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from './Components/Navbar/Navbar.js';
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Projects from "./Pages/Projects/Projects.js";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
