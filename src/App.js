import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from '../src/components/Navbar'
import About from './pages/About';
import Projects from './pages/Projects';
import Home1 from './pages/Home1';
import Blogs from './pages/Blogs';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home1" element={<Home1/>}></Route>
        <Route path="/" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
