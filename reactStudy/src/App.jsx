
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// 컴포너트 import
import MainMenu from './component/MainMenu'
import Info from './component/study1/Info'
import Board from './component/study1/Board'
import Member from './component/study1/Member'
import Store from './component/study1/Store'
import Schedule from './component/study2/Schedule'
import Student from './component/study2/Student'
import Memo from './component/study2/Memo'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <MainMenu /> }/>
          <Route path="/propstate" element={ <Info/>}/>
          <Route path="/boardMake" element={ <Board/>} />
          <Route path="/member" element={ <Member/>} />
          <Route path="/store/*" element={ <Store />} />
          <Route path="/schedule" element={ <Schedule />} />
          <Route path="/studentname" element={ <Student />} />
          <Route path="/simplememo" element={ <Memo />} />
        </Routes>
      </Router>

  )
}

export default App
