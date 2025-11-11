//  TodoList.jsx

import { Link } from "react-router-dom";
import { useState , useMemo} from "react";


export default function TodoList(){
    const [todo , setTodo] = useState([
        {id:1  ,  text:"아침샤워"  , done: true },
        {id:2  ,  text:"아침밥먹기"  , done: false },
        {id:33  ,  text:"커피사기"  , done: true },
        {id:44  ,  text:"회의하기"  , done: false },
        {id:5  ,  text:"육아시작"  , done: false  },
        {id:6  ,  text:"책읽어주기"  , done:false  },
        {id:12  ,  text:"샤워시키기"  , done:false  },
        {id:9  ,  text:"재우기"  , done: false }
    ]);

    const [filter , setFilter] =useState("all"); 
    //all - 전체,  active - 진행중 , done - 완료

    // 남은개수  구하기 함수
    const remaining = todo.filter( t => !t.done ).length;

    //filter 함수로 걸러주기 (전체, 진행중, 완료)
    const todoFilter = useMemo(() =>{
        if( filter==="active") return todo.filter( t => !t.done );
        if( filter==="done") return todo.filter( t => t.done );
        return todo;
    }, [todo,filter] );


    // 체크박스 클릭하면 체크되거나 해제 되거나
    const toggle = (id) =>{
        setTodo( todo.map( t=> (t.id === id ? { ...t, done: !t.done } : t)))
    };

    return(
        <>
            <Link to="/" className='home'>HOME</Link>

            <div>
                <h2> 할 일 리스트 </h2>
                <div>
                    <strong>남은 할 일 : {remaining}개</strong>
                </div>

                <div>
                    <button onClick={ () => setFilter("all") }>전체</button>
                    <button onClick={ () => setFilter("active") }>진행중</button>
                    <button onClick={ () => setFilter("done") }>완료</button>
                </div>

                <ul>
                    {todoFilter.map( 
                        (t) => (
                            <li>
                                <span>{t.text}</span>
                                <input type="checkbox"
                                  checked={t.done} 
                                  onChange={ () => toggle(t.id)}/>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    );
}