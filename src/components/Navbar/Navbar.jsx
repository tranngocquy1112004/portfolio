import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: -70,
  });
};

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/home") scrollToSection("intro");
    if (location.pathname === "/aboutme") scrollToSection("skills");
    if (location.pathname === "/myproject") scrollToSection("projects");
    if (location.pathname === "/contact") scrollToSection("contact");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="" />
      
      <div className="mobileMenuBtn" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`desktopMenu ${isMenuOpen ? 'active' : ''}`}>
        <NavLink className="desktopMenuListItem" to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink className="desktopMenuListItem" to="/aboutme" onClick={() => setIsMenuOpen(false)}>About Me</NavLink>
        <NavLink className="desktopMenuListItem" to="/myproject" onClick={() => setIsMenuOpen(false)}>My Project</NavLink>
        <NavLink className="desktopMenuListItem" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</NavLink>

      </div>
      
    </nav>
  )
}
export default Navbar