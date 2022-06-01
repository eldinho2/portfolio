import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Work from './components/Work';
import Render from "./components/ParticlesBackground";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/a' element={<Render />} />
      <Route path="/" element={<Home />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Skills" element={<Skills />} />
      <Route path="Work" element={<Work />} />
    </Routes>
  </BrowserRouter>
);
