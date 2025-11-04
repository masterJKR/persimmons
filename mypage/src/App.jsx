import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HomeMain from './pages/HomeMain';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={ < Home/>} >
            <Route index element={ <HomeMain /> } />
            <Route path="about" element={ <About/>} />
            <Route path="contact" element={ <Contact /> } />
          </Route>

          <Route path="/portfolio" element={ <Portfolio />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
