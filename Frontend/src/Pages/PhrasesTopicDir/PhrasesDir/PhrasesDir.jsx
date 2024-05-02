import React from "react";
import "./PhrasesDir.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";
import Navbar from "../../../Components/Navbar/Navbar";
import DirectoryCardPhrase from "../../../Components/DirectoryCard/DirectoryCardPhrase.jsx";
import {
  getSignPhrases,
  getTimePhrases,
  getDirectionPhrases,
} from "../../../Services/characters.js";
import BackButton from "../../../Components/BackButton/BackButton.jsx"

function PhrasesDir() {
  const { topic } = useParams();
  console.log("this is params for topic", topic);
  const navigate = useNavigate();
  const [phrases, setPhrases] = useState([]);
  const [title, setTitle] = useState("")

  useEffect(() => {
    const getPhrases = async () => {
      let info;
      switch (topic) {
        case "Sgn":
          info = await getSignPhrases();
          setTitle("Signs")
          break;
        case "Dir":
          info = await getDirectionPhrases();
          setTitle("Directions")
          break;
        case "Tim":
          info = await getTimePhrases();
          setTitle("Time")
          break;
        default:
          setPhrases([]);
          return;
      }
      setPhrases(info);
    };
    getPhrases();
  }, [topic]);

  return (
    <div className="phrasesdir">
      <Navbar />
      <div className="root-back-button-phrasesdir">
        <BackButton />
        <div>
        <h1 className="directory-title" onClick={() => navigate(`/phrases/`)}>
        {title}
        </h1>
        </div>
      </div>
      <div className="phrase-container">
        {phrases.map((phrase, idx) => (
          <div
            key={idx}
            className="dircard"
            onClick={() => navigate(`/phrases/${topic}/${phrase.phrase}`)}
          >
            <DirectoryCardPhrase
              imgStyle={{ display: "none" }}
              index={idx}
              title={phrase.phrase}
              img={phrase.img}
            />
          </div>
        ))}
      </div>
      <FooterSearch />
    </div>
  );
}

export default PhrasesDir;
