import { Route, Routes } from "react-router-dom";

import Landing from "./Pages/Landing/Landing.jsx";
import MainDir from "./Pages/MainDir/MainDir.jsx";
import AppInfo from "./Pages/AppInfo/AppInfo.jsx";
import DevTeam from "./Pages/DevTeam/DevTeam.jsx";
import AlphabetDir from "./Pages/AlphabetDir/AlphabetDir.jsx";
import Alphabet from "./Pages/AlphabetDir/Alphabet/Alphabet.jsx";
import NumberDir from "./Pages/NumberDir/NumberDir.jsx";
import Number from "./Pages/NumberDir/Numbers/Numbers.jsx";
import ComboDir from "./Pages/ComboDir/ComboDir.jsx";
import Combo from "./Pages/ComboDir/Combo/Combo.jsx";
import SpecialCharDir from "./Pages/SpecialCharDir/SpecialCharDir.jsx";
import SpecialChar from "./Pages/SpecialCharDir/SpecialChar/SpecialChar.jsx";
import PhrasesTopicDirectory from "./Pages/PhrasesTopicDir/PhrasesTopicDir.jsx";
import Flashcards from "./Pages/QuizDir/QuizTopics/Flashcards/Flashcards.jsx";
import FlashcardsAlpha from "./Pages/QuizDir/QuizTopics/Flashcards/FlashcardsAlpha.jsx";
import FlashcardsNumber from "./Pages/QuizDir/QuizTopics/Flashcards/FlashcardsNumber.jsx";
import FlashcardsPhrases from "./Pages/QuizDir/QuizTopics/Flashcards/FlashcardsPhrases.jsx";
import Matching from "./Pages/QuizDir/QuizTopics/Matching/Matching.jsx";
import FillIn from "./Pages/QuizDir/QuizTopics/FillIn/FillIn.jsx";
import QuizDir from "./Pages/QuizDir/QuizDir.jsx";
import PhrasesDir from "./Pages/PhrasesTopicDir/PhrasesDir/PhrasesDir.jsx"
import Phrases from "./Pages/PhrasesTopicDir/PhrasesDir/Phrases/Phrases.jsx"
import QuizTopics from "./Pages/QuizDir/QuizTopics/QuizTopics.jsx"

import DirectoryCard from "./Components/DirectoryCard/DirectoryCard.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Card from "./Components/Card/Card.jsx";
import FooterSearch from "./Components/FooterSearch/FooterSearch.jsx";
import DirectoryCardPhrase from "./Components/DirectoryCard/DirectoryCardPhrase.jsx";
import DirectoryCardQuiz from "./Components/DirectoryCard/DirectoryCardQuiz.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<MainDir />} />
        <Route path="/appinfo" element={<AppInfo />} />
        <Route path="/devteam" element={<DevTeam />} />
        <Route path="/alphabet/:id" element={<Alphabet />} />
        <Route path="/alphabetdir" element={<AlphabetDir />} />
        <Route path="/numberdir" element={<NumberDir />} />
        <Route path="/number/:id" element={<Number />} />
        <Route path="/combodir" element={<ComboDir />} />
        <Route path="/combo/:id" element={<Combo />} />
        <Route path="/specialchardir" element={<SpecialCharDir />} />
        <Route path="/specialchar/:id" element={<SpecialChar />} />

        {/* Phrase Routes */}
        <Route path="/phrases" element={<PhrasesTopicDirectory />} />
        <Route path="/phrases/:topic" element={<PhrasesDir />} />
        <Route path="/phrases/:topic/:word" element={<Phrases />} />

        {/* Quiz Routes */}
        <Route path="/quiz" element={<QuizDir />} />
        <Route path="/quiz/flashcards" element={<Flashcards />} />
        <Route path="/quiz/matching" element={<Matching />} />
        <Route path="/quiz/fillin" element={<FillIn />} />
	      <Route path="/quiz/topics" element={<QuizTopics />} />
        {/* Quiz Flash Cards */}
        <Route path="/quiz/flashcards" element={<Flashcards />} />
        <Route
          path="/quiz/flashcards/alphabet/:id"
          element={<FlashcardsAlpha />}
        />
        <Route
          path="/quiz/flashcards/numbers/:id"
          element={<FlashcardsNumber />}
        />
        <Route
          path="/quiz/flashcards/phrases"
          element={<FlashcardsPhrases />}
        />

        {/* component routes */}
        <Route path="/dircard" element={<DirectoryCard />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/card" element={<Card />} />
        <Route path="/search" element={<FooterSearch />} />
        <Route path="/dircardphrase" element={<DirectoryCardPhrase />} />
        <Route path="/dircardquiz" element={<DirectoryCardQuiz />} />
      </Routes>
    </>
  );
}

export default App;
