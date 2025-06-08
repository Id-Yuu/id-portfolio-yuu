import "./style.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// icon
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className="menu-mobile"
      >
        <GiHamburgerMenu />
      </button>
      <div id="nav-container" className={isNavExpanded ? "menu show" : "menu"}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li><NavLink to="certificate">Certificate</NavLink></li>
          <li><NavLink to="skill">Skills</NavLink></li>
          <li><NavLink to="resume">Resume</NavLink></li>
          <li><NavLink to="portfolio">Portfolio</NavLink></li>
        </ul>
      </div>
    </>
  );
};
