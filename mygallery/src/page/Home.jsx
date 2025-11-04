
import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import HomeIndex from "./HomeIndex";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Home(){
  return(
    <div>
        <div className="nav">
            <Link to="/place">전시장</Link> 
            <Link to="/dir">작가</Link>
            <Link to="/signUp">로그인</Link>
        </div>
        
        <Routes>
            <Route path="/" element={ <HomeIndex /> } /> 
            <Route path="/signUp"  element={ <SignUp />} />
            <Route path="/signIn" element={ <SignIn/>} />
        </Routes>
    </div>
  );
}
