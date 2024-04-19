import { Route, Routes } from "react-router-dom"

import Landing from "./Pages/Landing/Landing.jsx"
import MainDir from "./Pages/MainDir/MainDir.jsx"
import AppInfo from "./Pages/AppInfo/AppInfo.jsx"
import DevTeam from "./Pages/DevTeam/DevTeam.jsx"
import AlphabetDir from "./Pages/AlphabetDir/AlphabetDir.jsx"
import Alphabet from "./Pages/AlphabetDir/Alphabet/Alphabet.jsx"

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
        <Route path="/alphabet" element={<Alphabet/>}/>
        <Route path="/alphabetdir" element={<AlphabetDir/>}/>

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
