import "./style.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// Reusable NavItem component, similar to NavLink
const NavItem = ({ to, children, ...props }) => (
  <NavLink to={to} {...props}>
    {children}
  </NavLink>
);

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Single handler, not repeated per NavItem
  const handleLinkClick = () => setIsNavExpanded(false);

  // Nav data array
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/certificate", label: "Certificate" },
    { to: "/skill", label: "Skills" },
    { to: "/resume", label: "Resume" },
    { to: "/portfolio", label: "Portfolio" },
  ];

  return (
    <>
      <button
        onClick={() => setIsNavExpanded(!isNavExpanded)}
        className="menu-mobile"
      >
        <GiHamburgerMenu />
      </button>
      <div id="nav-container" className={isNavExpanded ? "menu show" : "menu"}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavItem to={to} onClick={handleLinkClick}>
                {label}
              </NavItem>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
