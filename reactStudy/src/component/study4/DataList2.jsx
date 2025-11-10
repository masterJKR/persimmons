//  DataList2.jsx

import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataList2(){
    const member = [
        { id:56  ,  userId:"skyblue" , age:45 , tel:"01012123333"  },
        { id:1  ,  userId:"gold119" , age:35 , tel:"01034456789"  },
        { id:2  ,  userId:"kfteam1" , age:23 , tel:"01023948576"  },
        { id:5  ,  userId:"asdfg" , age:38 , tel:"01012222222"  },
        { id:8  ,  userId:"qwer112" , age:15 , tel:"01054679876"  },
        { id:15  ,  userId:"hahaha66" , age:20 , tel:"01012345678"  }
    ];
    const [age , setAge ] = useState(0);
    const [userId , setUserId ] = useState("");
    const [ keyword , setKeyword ] = useState("");

    // 첫페이지에서는  map출력2 라고 출려 , 주소는 /map2

    const member2 = member.filter(  
        u => [u.userId, u.age, u.tel].join(" ")
             .includes( keyword )
      );

    return(
        <>
            <Link to="/" className="home">HOME</Link>

            ID검색 <input type="text" onChange={ (e) => setKeyword(e.target.value)}/>
            <ul>
               { 
               member2.map(
                    (m) => (
                        <li key={m.id} className="mb-4">{m.userId} {m.tel}</li> 
                    )
               )
            //    member.map(
            //         (m) => {
            //             if( m.age>=30)
            //             return <li key={m.id} className="mb-4">{m.userId} {m.tel}</li> ;
            //         }
            //    )
               } 
            </ul>
        </>
    );

}

