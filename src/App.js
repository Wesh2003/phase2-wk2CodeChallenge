import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BotCollection from './components/BotCollection';
import NavBar from './components/NavBar'
import React from 'react';
import Home from './components/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/collection' element={<BotCollection/>} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
