import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import News from "./components/News"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/astro-web" element={<Home/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;