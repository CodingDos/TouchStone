import { Route, Routes } from "react-router-dom"

import Landing from "./Pages/Landing/Landing.jsx"
import MainDir from "./Pages/MainDir/MainDir.jsx"
import AppInfo from "./Pages/AppInfo/AppInfo.jsx"
import DevTeam from "./Pages/DevTeam/DevTeam.jsx"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/mainDir" element={<MainDir />}/>
        <Route path="/appInfo" element={<AppInfo/>}/>
        <Route path="/devteam" element={<DevTeam/>}/>
      </Routes>
    </>
  )
  }

export default App
