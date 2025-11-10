// TestFetch.jsx
import { useEffect, useState } from "react";

export default function TestFetch(){
    const [users ,setUsers] = useState([]);

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then( (response) => response.json() ) // json으로 변환
            .then( (data) => setUsers(data) );
        }, []
    );

    return(
        <>
            <h2>데이터 출력</h2>
            <ul>
                {
                    users.map( (u) => (
                        <li>{u.name} : {u.email} </li>
                    )
                    )
                }
            </ul>
        </>
    );
}