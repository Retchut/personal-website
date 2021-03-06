import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Projects from "./Pages/Projects/Projects.js";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />}/>
        <Route path="/projects" exact element={<Projects />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
