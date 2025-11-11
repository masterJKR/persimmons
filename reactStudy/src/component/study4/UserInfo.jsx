//  UserInfo.jsx

import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'

export default function UserInfo(){
    const [users ,setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [ ad , setAd ] = useState(1); // 정렬 변경

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then( (response) => response.json() ) // json으로 변환
            .then( (data) => setUsers(data) );
        }, []
    );
    const userFilter = users.filter( u => 
        [u.name , u.email, u.company.name] .join(" ")
        .includes(keyword)
    ).sort( (a,b) => a.name.localeCompare(b.name)*ad  );

    //  a.name.localeCompare(b.name) !== 0 ? 
    //  a.name.localeCompare(b.name) : a.email.localeCompare(b.email)

    return(
        <>
            <Link to="/" className='home'>HOME</Link>

            <div className='border rounded-2xl p-4'>

                <button onClick={() => setAd( ad * -1)}> 
                  { ad==1 ? "오름차순" : "내림차순"}  
                </button>
               

                <div className='mb-4'>
                검색<input type="text" onChange={ (e)=>setKeyword(e.target.value)} className='border ml-2.5'/>
                <button >검색</button>
                </div>
                <ul>
                    {
                        userFilter.length == 0 ?
                        <p>검색결과가 없습니다.</p> :
                        userFilter.map(
                            (u) =>
                            ( <li className='flex gap-4 mb-4 items-center'>
                                <b className='underline w-40 text-left'>{u.name}</b>
                                <span>{u.email}</span>
                                <span className='bg-yellow-800'>{u.phone}</span>
                                <span>{u.company.name}</span>
                              </li>)
                        )
                    }
                </ul>
            </div>
        </>
    );
}

