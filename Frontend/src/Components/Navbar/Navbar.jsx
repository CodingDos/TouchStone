import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div onClick={() => navigate("/")}>
        <h3 className="navbar-title">TouchStone</h3>
      </div>
      <div className="burgermenu">
        <Menu right>
          <NavLink
            exact
            to="/home"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/home" ? "active-link" : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/alphabetdir"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/alphabetdir" ? "active-link" : ""
            }`}
          >
            Alphabet
          </NavLink>
          <NavLink
            to="/numberdir"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/numberdir" ? "active-link" : ""
            }`}
          >
            Numbers
          </NavLink>
          <NavLink
            to="/combodir"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/combodir" ? "active-link" : ""
            }`}
          >
            Combos
          </NavLink>
          <NavLink
            to="/specialchardir"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/specialchardir" ? "active-link" : ""
            }`}
          >
            Special Characters
          </NavLink>
          <NavLink
            to="/phrases"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/phrases" ? "active-link" : ""
            }`}
          >
            Phrases
          </NavLink>
          <NavLink
            to="/quiz"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/quiz" ? "active-link" : ""
            }`}
          >
            Quizzes
          </NavLink>
          <NavLink
            to="/devteam"
            activeClassName="active-link"
            className={`burgermenu-link ${
              location.pathname === "/devteam" ? "active-link" : ""
            }`}
          >
            About Us
          </NavLink>
          {/* <Link to="/home" className="burgermenu-link">Home</Link>
          <Link to="/alphabetdir" className="burgermenu-link">Alphabet</Link>
          <Link to="/numberdir" className="burgermenu-link">Numbers</Link>
          <Link to="/combodir" className="burgermenu-link">Combos</Link>
          <Link to="/specialchardir" className="burgermenu-link">Special Characters</Link>
          <Link to="/phrases" className="burgermenu-link">Phrases</Link>
          <Link to ="/quiz" className="burgermenu-link">Quizes</Link>
          <Link to='/devteam' className="burgermenu-link">About Us</Link> */}
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
