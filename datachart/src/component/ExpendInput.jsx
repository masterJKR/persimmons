// ExpendInput.jsx
// App.jsx에 등록 하기

import { useState , useEffect } from "react";
import BarChartCard from "./BarChartCard";

export default function ExpendInput(){
    const [expendList, setExpendList] = useState([]);
    const [money, setMoney] = useState(0);
    const [detail, setDetail] =useState("");
    const [day , setDay ] =useState("");
    const [showChart, setShowChart ] = useState(false);
    const [chartData, setChartData] = useState(null); // 막대 차트 컴포넌트에 보낼꺼!

    useEffect( ()=> {
        const jsonData = localStorage.getItem("expendList");
        if( jsonData ){
            setExpendList( JSON.parse( jsonData ) );
        }
    }, [] );


    const addList = () => {
        if( !money || !day ){
            alert("금액과 날짜는 반드시 입력"); return;
        }
    
        const newItem ={
            id:Date.now(), money:Number(money), detail, day
        };
        setExpendList( (p) =>{ 
            const newData = [...p,newItem ]   ;
            // 금액, 내용, 날짜  로컬스토리지에 저장
            localStorage.setItem("expendList", JSON.stringify(newData) );
            return newData;
        });

        setMoney(0);
        setDetail("");
        console.log( expendList );
    };
    
    //차트버튼을 클릭하면 동작할 함수
    const chartActive= () =>{
        if( expendList.length === 0 ){
            alert("등록된 내역이 없다! 쯧");
            return;
        }

        // 날짜별 지출 총금액 을 막대 그래프로 표현
        const totalByDate = expendList.reduce( (a,c) => {
            if( !a[c.day] ) a[c.day] = 0; 
            a[c.day] += c.money;
            return a;  //  "2025-11-09" : 150000
        }, {} );
        // totalByDate = { "2025-11-09" : 150000,
        //  "2025-11-10" : 40000 , "2025-11-11" : 1230000  }

        const labels = Object.keys(totalByDate).sort();
        const data = labels.map( (d) => totalByDate[d] );
        const label = "날짜별 지출 합계";

        setChartData( { labels, data, label});

        setShowChart(true);
    };


    return(

        <div className="flex gap-10 p-8 rounded">
            <div className="bg-sky-400 p-8 rounded">
                <div className="flex items-center gap-1 mb-4">
                    <label>금액</label>
                    <input type="number" className="bg-white border rounded px-2 py-1 text-sm"
                        value={money} 
                        onChange={ (e) => setMoney(e.target.value)} />
                </div>
                <div className="flex items-center gap-1 mb-4">
                    <label>내용</label>
                    <input type="text"  className="bg-white border rounded px-2 py-1 text-sm"
                        value={detail} 
                        onChange={(e) => setDetail(e.target.value)} />
                </div>
                <div className="flex items-center gap-1 mb-4">
                    <label>날짜</label>
                    <input type="date" className="bg-white border rounded px-2 py-1 text-sm"
                        value={day} 
                        onChange={(e) => setDay(e.target.value)} />
                </div>
                <button onClick={addList}
                    className="mt-2 w-full bg-blue-500 text-white text-sm font-semibold rounded px-3 py-2 hover:bg-blue-600"
                >등록</button>
            </div>
            <div className="flex items-center justify-center bg-white" style={{width:500}}>

                {
                showChart ?
                <BarChartCard labels={chartData.labels} data={chartData.data} label={chartData.label} /> :
                <button onClick={chartActive}
                  className="bg-emerald-500 text-white text-sm font-semibold rounded px-10 py-10 hover:bg-emerald-600"
                >차트</button>

                }
            </div>
        </div>
    );
}

/*
    num = [ 1, 2, 3, 4, 5]    1부터 5까지 총합
    num.reduce( (a,c) => {
        a = a + c;
        return a;
    },0)



*/