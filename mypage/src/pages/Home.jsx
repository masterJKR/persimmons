import {Link, Outlet, Routes, Route} from 'react-router-dom'
import '../css/home.css'

import HomeMain from './HomeMain';
import About from './About';


export default function Home(){
    return(
        <>
            <div className='nav'>
                <Link to="/" className='link'>HOME</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/contact" className='link'>Contact</Link>
            </div>

            <Outlet/>



            {/* <Routes>
                <Route path="/" element ={<HomeMain />} />
                <Route path="/about" element ={<About />} />
            </Routes> */}
            
        </>
    );
}