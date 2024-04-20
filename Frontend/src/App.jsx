import { Route, Routes } from "react-router-dom"

import Landing from "./Pages/Landing/Landing.jsx"
import MainDir from "./Pages/MainDir/MainDir.jsx"
import AppInfo from "./Pages/AppInfo/AppInfo.jsx"
import DevTeam from "./Pages/DevTeam/DevTeam.jsx"
import AlphabetDir from "./Pages/AlphabetDir/AlphabetDir.jsx"
import Alphabet from "./Pages/AlphabetDir/Alphabet/Alphabet.jsx"
import NumberDir from "./Pages/NumberDir/NumberDir.jsx"
import Number from "./Pages/NumberDir/Numbers/Numbers.jsx"
import ComboDir from "./Pages/ComboDir/ComboDir.jsx"
import Combo from "./Pages/ComboDir/Combo/Combo.jsx"
import SpecialCharDir from "./Pages/SpecialCharDir/SpecialCharDir.jsx"
import SpecialChar from "./Pages/SpecialCharDir/SpecialChar/SpecialChar.jsx"

import DirectoryCard from "./Components/DirectoryCard/DirectoryCard.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Card from "./Components/Card/Card.jsx"
import FooterSearch from "./Components/FooterSearch/FooterSearch.jsx"

import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<MainDir />}/>
        <Route path="/appinfo" element={<AppInfo/>}/>
        <Route path="/devteam" element={<DevTeam/>}/>
        <Route path="/alphabet/:id" element={<Alphabet/>}/>
        <Route path="/alphabetdir" element={<AlphabetDir/>}/>
        <Route path="/numberdir" element={<NumberDir/>}/>
        <Route path="/number/:id" element={<Number/>}/>
        <Route path="/combodir" element={<ComboDir/>}/>
        <Route path="/combo/:id" element={<Combo/>}/>
        <Route path="/specialchardir" element={<SpecialCharDir/>}/>
        <Route path="/specialchar/:id" element={<SpecialChar/>}/>

        {/* test routes */}
        <Route path="/dircard" element={<DirectoryCard/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/search" element={<FooterSearch/>}/>
      </Routes>
    </>
  )
  }

export default App
