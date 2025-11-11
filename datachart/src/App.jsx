import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChartBasic1 from './component/ChartBasic1'
import BarChart1 from './component/BarChart1'
import BarChart2 from './component/BarChart2'
import BarChart3 from './component/BarChart3'

function App() {
  const [ show, setShow ] = useState(null); 

  const btClass = (name) => 
        `px-4 py-2 rounded-lg text-white font-bold transition cursor-pointer
          ${show === name ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-500"}`;

  return (
    <>
      <div className='flex gap-3'>
        <button onClick={ () => setShow("A") } className={ btClass("A") }>차트둘러보기</button>
        <button onClick={ () => setShow("B") } className={ btClass("B") }>
            막대그래프1
        </button>
        <button onClick={ () => setShow("C") } className={ btClass("C") }>
            막대그래프2
        </button>
        <button onClick={ () => setShow("D") } className={ btClass("D") }>
            누적막대
        </button>
      </div>

      <div className='mt-8 '>
        { show==="A" &&  <ChartBasic1 /> }
        { show==="B" &&  <BarChart1 /> }
        { show==="C" &&  <BarChart2 /> }
        { show==="D" &&  <BarChart3 /> }
      </div>
    </>
  )
}

export default App
