import bg from '../images/bk.jpg'
import {Link} from 'react-router-dom'
export default function HomeMain(){
    return(
        <>
            <div style={{width:"100%", display:"flex"}}>
                <Link to="/portfolio">포트폴리오</Link>
            </div>
            <div style={{width:"100%"}}>
                <img src={bg} style={{width:"100%"}}/>
            </div>
        </>
    );
}