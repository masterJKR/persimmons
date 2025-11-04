
import React from "react";
import {Link} from 'react-router-dom'
import img1 from '../images/mo.jpg';
import img2 from '../images/ban.jpg';

export default function Home(){
  return(
    <div>
        <div className="nav">
            <Link to="/place">전시장</Link> 
            <Link to="/dir">작가</Link>
            <Link to="/signUp">로그인</Link>
        </div>
        <div>
            <img src={img1}/>
            <img src={img2}/>
        </div>
    </div>
  );
}
