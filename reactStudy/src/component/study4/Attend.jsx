// Attend.jsx
//   MainMenu에 출석부 , 주소는 /attend 
//   App 에  path /attend  , element  Attend


import { Link } from "react-router-dom";
import { useState } from "react";

export default function Attend(){
    const [stds, setStds] = useState([
        {id:1  , name:"이순신" , className:"1학년2반"  },{id:9  , name:"정도전" , className:"1학년2반"  },
        {id:2  , name:"장보고" , className:"1학년3반"  },{id:10  , name:"박팽년" , className:"1학년3반"  },
        {id:3  , name:"문익점" , className:"1학년2반"  },{id:11  , name:"성상문" , className:"2학년3반"  },
        {id:4  , name:"최영" , className:"2학년3반"  },{id:12  , name:"곽재우" , className:"2학년1반"  },
        {id:5  , name:"정약용" , className:"2학년1반"  },{id:13  , name:"허준" , className:"1학년3반"  },
        {id:6  , name:"정몽주" , className:"2학년1반"  },{id:14  , name:"이방원" , className:"1학년1반"  },
        {id:7  , name:"김유신" , className:"2학년3반"  },{id:15  , name:"이방지" , className:"1학년1반"  },
        {id:8  , name:"김춘추" , className:"1학년1반"  }
    ]);
    return(
        <>
            <Link to="/" className="home">HOME</Link>
            <div>
                <div className="mb-4">
                    검색 <input type="text"  className="border rounded p-2"/>
                </div>
                <div className="flex items-center gap-4">이름 정렬  
                    <button>오름차순</button>
                    <button>내림차순</button>
                </div>
                <div className="mt-4">
                    {}
                </div>
            </div>
        </>
    );
}