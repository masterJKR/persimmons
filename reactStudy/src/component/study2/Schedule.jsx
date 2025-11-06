// Schedule.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import ScheduleForm from "./ScheduleForm";
import ScheduleList from "./ScheduleList";


export default function Schedule(){
    const [ time , setTime ] = useState("");
    const [ text , setText ] = useState("");
    const [ items , setItems ] = useState([]);

    const addItem = () => {  // 입력한 시간과 내용을  items 배열에 저장 시키기
        if( !time || !text.trim()) return; // 아무때나 등록버튼 클릭한다고 저장 시키면 안되지!!
    };

    return(
        <div style={{width:520 , margin:"50px auto"}}>
            <Link to="/" className="home">HOME</Link>

            <h2>하루일과</h2>
            <ScheduleForm 
                time={time} 
                text={text} 
                setTime={setTime} 
                setText={setText}
            />
            <div style={{ marginTop:50}}>
                <ScheduleList />
            </div>
        </div>
    );
}