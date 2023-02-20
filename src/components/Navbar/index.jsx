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
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="certificate">Certificate</NavLink>
          <NavLink to="skill">Skills</NavLink>
          <NavLink to="resume">Resume</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
        </ul>
      </div>
    </>
  );
};
