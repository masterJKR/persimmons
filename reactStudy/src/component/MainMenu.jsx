// MainMenu.jsx

import { Link } from 'react-router-dom'

export default function MainMenu(){

    return (  // 설명, 실습, 문제 ㄷ등등  여기에  이동 링크 만들어서 사용할꺼임
        <div className="nav">
            <Link to="/propstate">props+state</Link> 
        </div>
    );
}