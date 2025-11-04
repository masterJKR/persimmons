import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import SignIn from "./page/signIn";
function Home(){
  const navigate=useNavigate();
  return(
    <div>
      <button onClick={ () => {navigate("/signIn")}}>가입하기</button>
    </div>
  );
}

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/signIn" element={ <SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
