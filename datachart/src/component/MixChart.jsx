// MixChart.jsx

import "chart.js/auto"
import { plugins, scales } from "chart.js/auto";
import { Chart } from "react-chartjs-2"

export default function MixChart(){
    const data={
        labels : ["1월","2월","3월","4월","5월","6월"],
        datasets : [
            
            {  // 선 그래프
                type:"line",
                label : "성장률 (%)",
                data : [5, 8, 6 , 9, 11, 13 ],
                yAxisID : "y1"
            },
            {  // 막대차트
                type:"bar", 
                label:"매출액(만원)",
                data : [320,410,380,460,520,610],
                yAxisID : "y" // 주축 - 왼쪽
            }
        ]
    };

    const options={
        plugins:{
            title:{  // 차트 제목
                display:true,
                text : "월별 매출액 및 성장률",
                font :{ size:20, weight:"bold" }
            },
            legend:{  // 범례
                position:"bottom"
            },
            tooltip:{  //  데이터를 보여주는 말풍선
                callbacks : {
                    label: (ctx) => {
                        const label = ctx.dataset.label ; //마우스 오버된 곳의 label
                        const value = ctx.parsed.y; // 마우스 오버된곳의 data값
                        return ctx.dataset.type === "bar" ?
                        `${label} : ${value.toLocaleString()}만원`
                        : `${label} : ${value}%`;
                    }
                }
            }
        },
        scales:{ //축 설정 - x축 , y축  
            x:{
                title:{ display:true, text:"월"}
            },
            y:{
                position:"left",
                title:{text:"매출액(만원)", display:true}
            },
            y1:{
                position:"right",
                grid:{drawOnChartArea:false},
                title:{text:"성장률(%)", display:true},
                beginAtZero:true
            }
        }
    };

    return(
        <div className="bg-white">
            <Chart data={data} type="bar"  options={options} />
        </div>
    );
}