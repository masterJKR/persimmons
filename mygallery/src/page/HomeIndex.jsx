import img1 from '../images/mo.jpg';
import img2 from '../images/ban.jpg';

export default function HomeIndex(){
    return(
        <>
            <div>
                <img src={img1}/>
                <img src={img2}/>
            </div>
        </>
    );
}