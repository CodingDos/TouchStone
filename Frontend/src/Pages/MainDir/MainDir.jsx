import React from "react";
import { useNavigate } from "react-router-dom";

import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";
import DirectoryCard from "../../Components/DirectoryCard/DirectoryCard.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

import "./MainDir.css";

function MainDir() {
  const navigate = useNavigate();

  return (
    <div className="maindir">
      <Navbar />
      <div onClick={() => navigate("/alphabetdir")}>
        <DirectoryCard />
      </div>
      <DirectoryCard />
      <DirectoryCard />
      <DirectoryCard />
      <FooterSearch/>
    </div>
  );
}

export default MainDir;
