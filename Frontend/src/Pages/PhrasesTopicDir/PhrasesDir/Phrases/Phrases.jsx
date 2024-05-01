import React, { useEffect, useState } from "react";
import "./Phrases.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getSignPhrases,
  getTimePhrases,
  getDirectionPhrases,
} from "../../../../Services/characters.js";
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import DirectoryCardPhrase from "../../../../Components/DirectoryCard/DirectoryCardPhrase.jsx";

function Phrases() {
  const [phrases, setPhrases] = useState([]);
  const { topic, word } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        setIsLoading(true);
        let allPhrases;
        switch (topic) {
          case "Sgn":
            allPhrases = await getSignPhrases();
            break;
          case "Tim":
            allPhrases = await getTimePhrases();
            break;
          case "Dir":
            allPhrases = await getDirectionPhrases();
            break;
          default:
            allPhrases = []; // Handle unexpected topic gracefully
        }
        setPhrases(allPhrases);
      } catch (error) {
        console.error("Error fetching phrases:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhrases();
  }, [topic]); // Re-fetch phrases when the topic changes

  const currentIdx = phrases.findIndex((p) => p.phrase === word);

  const navigateToPhrase = (index) => {
    const phrase = phrases[index];
    navigate(`/phrases/${topic}/${phrase.phrase}`);
  };

  const onClickBack = () => {
    const previousIdx = currentIdx > 0 ? currentIdx - 1 : phrases.length - 1;
    navigateToPhrase(previousIdx);
  };

  const onClickForward = () => {
    const nextIdx = currentIdx < phrases.length - 1 ? currentIdx + 1 : 0;
    navigateToPhrase(nextIdx);
  };

  const currentPhrase = phrases[currentIdx] || {}; // Default to an empty object if no phrase is found

  if (isLoading) {
    return (
      <div className="phrasesdir">
        <Navbar />
        <div>Loading...</div>
        <FooterSearch />
      </div>
    );
  }

  return (
    <div className="phrasesdir">
      <Navbar />
      <div className="phrase-container">
        <h1 onClick={() => navigate("/phrases")} className="directory-title">
          Phrases
        </h1>
        {currentPhrase ? (
          <div className="dircard">
            <DirectoryCardPhrase
              width={"80%"}
              height={"340px"}
              titleStyle={{ fontSize: "60px" }}
              imgStyle={{ height: "120px", width: "100px", margin: "0px" }}
              title={currentPhrase.phrase}
              img={currentPhrase.img}
            />
          </div>
        ) : (
          <div>No phrase data available.</div>
        )}
        <div className="alphabet-btns alpha-btn">
          <button
            onClick={onClickBack}
            className="alphabet-btns-back phrases-left-btn"
          >
            <i className="fa fa-angle-left"></i>
          </button>
          <button
            onClick={onClickForward}
            className="alphabet-btns-forward phrases-right-btn"
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default Phrases;
