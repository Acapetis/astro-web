// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import News from "./components/News"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/news" element={<News/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;