import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignIn from "./page/SignIn";
import Home from "./page/Home";
import SignUp from "./page/SignUp";
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/signUp" element={ <SignUp />} />
          <Route path="/signIn" element={ <SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
