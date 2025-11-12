// DougnutChart3.jsx

import "chart.js/auto"
import { Doughnut } from "react-chartjs-2"

export default function DougnutChart3(){
    const rawData = [
        {dept:"개발팀" , gender:"여", count: 10 , year:2024 },
        {dept:"개발팀"  , gender:"남" , count:20,  year:2024  },
        {dept:"디자인팀"  , gender:"여" , count:15,  year:2024  },
        {dept:"디자인팀"  , gender:"남" , count:13,  year:2024  },
        {dept:"영업팀"  , gender:"여" , count:6,  year:2024  },
        {dept:"영업팀"  , gender:"남" , count:12,  year:2024  },
        {dept:"개발팀"  , gender:"여" , count:28,  year:2025  },
        {dept:"개발팀"  , gender:"남" , count:22,  year:2025  },
        {dept:"디자인팀"  , gender:"여" , count:10,  year:2025  },
        {dept:"디자인팀"  , gender:"남" , count:34,  year:2025  },
        {dept:"영업팀"  , gender:"여" , count:7,  year:2025  },
        {dept:"영업팀"  , gender:"남" , count:19,  year:2025  },
    ];
        // 회사의 년도별 남여 성비 
    const GENDERLABEL = ["남","여"]; 

    const genderByYear= {
        2025 : [0,0] , 2024 : [ 0, 0]
    };
    rawData.map( (r) => {
        genderByYear[r.year.toString()][GENDERLABEL.indexOf(r.gender)]+=r.count;
    });

    const data ={
        labels:GENDERLABEL,
        datasets:[
            {
                label:"2025년",
                data : genderByYear["2025"],
                cutout:"50%"
            },{
                label:"2024년",
                data : genderByYear["2024"],
                radius:"80%"
            }
        ]
    };
    return(
        <>

            <Doughnut data={data} />
        </>
    );
}