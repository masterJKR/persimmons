// DougnutChart1.jsx


import "chart.js/auto"
import { Doughnut } from "react-chartjs-2"


export default function DougnutChart1(){
    
    const data = {
        labels: ["웹개발", "AI", "데이터시각화","게임개발"],
        datasets:[
            {
                label:"과정비율",
                data : [40, 20, 25, 15],
                backgroundColor:[
                    "#3163C9", "#6799FF"
                    ,"#9DCFFF","#C1F3FF"
                ]
            }
        ]
    };

    return(
        <>
            <div style={{width:400}}>
            <Doughnut data={data} />
            </div>
        </>
    );
}
/*
    기본 도넛 차트
      -  원의 가운데 비어있는 도넛 모양의 차트
      - 비율형 데이터 시각화에 사용
      - 매출 비중, 사용자 비율, 점유율 등 

    원형 차트
    - 도넛과 비슷하지만 가운데 뚫려 있지 않음
    - 비율형 데이터 시각화에 사용, 도넛과 비슷

    반 도넛 차트
     - 도넛을 반원으로 표시 
     - 진행률, 만족도, 점수 시각화에 사용

     멀티 도넛 차트 
      - 여러 데이터를 겹쳐서 표현
      - 남녀비율+전체 등록자수

    도넛 진행바 차트
     - 반도넛 모양에 단일 데이터 진행률 시각화

*/
