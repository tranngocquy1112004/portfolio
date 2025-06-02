import React, { useEffect } from "react";
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

  useEffect(() => {
    if (location.pathname === "/home") scrollToSection("intro");
    if (location.pathname === "/aboutme") scrollToSection("skills");
    if (location.pathname === "/myproject") scrollToSection("projects");
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="" />
      <div className="desktopMenu">
        <NavLink className="desktopMenuListItem" to="/home">Home</NavLink>
        <NavLink className="desktopMenuListItem" to="/aboutme">About Me</NavLink>
        <NavLink className="desktopMenuListItem" to="/myproject">My Project</NavLink>
        {/* <Link className="desktopMenuListItem" to="/" spy={true} smooth={true}>Clients</Link>  */}
      </div>
      <button className="desktopMenuBtn">Contact Me</button>
    </nav>
  )
}
export default Navbar