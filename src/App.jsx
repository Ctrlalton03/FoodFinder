import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Game from './pages/Game';
import HeaderNav from './components/HeaderNav';

function App() {

  return (
    <>
    <Router>
        <HeaderNav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
