import React from "react";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <div onClick={() => navigate("/")}>
        <h3 className="navbar-title">TouchStone</h3>
      </div>
      <div className="burgermenu">
        <Menu right>
          <Link to="/home" className="burgermenu-link">Home</Link>
          <Link to="/alphabetdir" className="burgermenu-link">Alphabet</Link>
          <Link to="/numberdir" className="burgermenu-link">Numbers</Link>
          <Link to="/combodir" className="burgermenu-link">Combos</Link>
          <Link to="/specialchardir" className="burgermenu-link">Special Characters</Link>
          <Link to="/phrases" className="burgermenu-link">Phrases</Link>
          <Link to ="/quiz" className="burgermenu-link">Quizes</Link>
          <Link to='/devteam' className="burgermenu-link">About Us</Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
