import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="navbar-title">TouchStone</h3>
      <div className="burgermenu">
        <Menu right>
          <Link to="/home" className="burgermenu-link">Home</Link>
          <Link to="/alphabetdir" className="burgermenu-link">Alphabet</Link>
          <Link className="burgermenu-link">Numbers</Link>
          <Link className="burgermenu-link">Combos</Link>
          <Link className="burgermenu-link">Special Characters</Link>
          <Link className="burgermenu-link">Phrases</Link>
          <Link className="burgermenu-link">Quizes</Link>
          <Link to='/devteam' className="burgermenu-link">About Us</Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
