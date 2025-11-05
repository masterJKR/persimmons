import { useState } from "react";

export default function Contact(){
    const [name , setName] = useState("");

    return(
        <>
            <input type="text" onChange={ (e) => setName(e.target.value)  }/>
        
            <p >당신의 이름은 ? {name}</p>
        </>
    );
}
