import React, { useEffect, useState } from "react";
import "./Phrases.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPhrase } from "../../../../Services/characters.js";
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import DirectoryCardPhrase from "../../../../Components/DirectoryCard/DirectoryCardPhrase.jsx";

function Phrases() {
  const { word } = useParams();
  const navigate = useNavigate();
  const [singlePhrase, setSinglePhrase] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState([]);

  useEffect(() => {
    const getSinlgePhrase = async () => {
      try {
        setIsLoading(true);
        const info = await getPhrase(word);
        setSinglePhrase(info);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (word) {
      getSinlgePhrase();
    }
  }, [word]);

  function goBack() {
    const pathArray = window.location.pathname.split("/");
    pathArray.pop();
    const newPath = pathArray.join("/");
    navigate(newPath);
  }

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
        {singlePhrase ? (
          <div className="dircard">
            <DirectoryCardPhrase
              width={"80%"}
              height={"340px"}
              titleStyle={{ fontSize: "60px" }}
              imgStyle={{ height: "120px", width: "100px", margin: "0px" }}
              title={singlePhrase.phrase}
              img={singlePhrase.img}
            />
          </div>
        ) : (
          <div>No phrase data available.</div>
        )}
        <div className="alphabet-btns alpha-btn">
          <button className="alphabet-btns-back">
            <i className="fa fa-angle-left"></i>
          </button>
          <button className="alphabet-btns-forward">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default Phrases;
