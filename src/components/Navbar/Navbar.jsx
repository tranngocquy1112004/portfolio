import React, { useEffect, useState } from "react"; // Import React và các hook
import './Navbar.css'; // Import CSS cho Navbar
import logo from '../../assets/logo.png'; // Import logo
import { NavLink, useLocation } from "react-router-dom"; // NavLink để điều hướng, useLocation để lấy đường dẫn hiện tại
import { scroller } from "react-scroll"; // scroller để cuộn đến section
import { FaMoon, FaSun } from 'react-icons/fa'; // Icon cho chuyển theme

// Hàm cuộn đến section chỉ định trên trang
const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 800, // Thời gian cuộn (ms)
    delay: 0, // Không delay
    smooth: "easeInOutQuart", // Hiệu ứng cuộn mượt
    offset: -70, // Đẩy lên 70px (thường để tránh che bởi navbar)
  });
};

const Navbar = () => {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State kiểm soát menu mobile
  // State theme, lấy từ localStorage nếu có, mặc định là 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Khi theme thay đổi, cập nhật class cho body và lưu vào localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Khi đường dẫn thay đổi, tự động cuộn đến section tương ứng
  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") scrollToSection("intro");
    if (location.pathname === "/aboutme") scrollToSection("skills");
    if (location.pathname === "/myproject") scrollToSection("projects");
    if (location.pathname === "/contact") scrollToSection("contact");
  }, [location.pathname]);

  // Đảo trạng thái menu mobile (mở/đóng)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Đảo trạng thái theme (light/dark)
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="navbar"> {/* Navbar chính */}
      <img className="logo" src={logo} alt="logo" /> {/* Logo */}
      
      {/* Nút menu cho mobile */}
      <div className="mobileMenuBtn" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu desktop và mobile (hiện khi isMenuOpen = true trên mobile) */}
      <div className={`desktopMenu ${isMenuOpen ? 'active' : ''}`}>
        {/* Các link điều hướng, click sẽ đóng menu mobile */}
        <NavLink className="desktopMenuListItem" to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink className="desktopMenuListItem" to="/aboutme" onClick={() => setIsMenuOpen(false)}>About Me</NavLink>
        <NavLink className="desktopMenuListItem" to="/myproject" onClick={() => setIsMenuOpen(false)}>My Project</NavLink>
        <NavLink className="desktopMenuListItem" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</NavLink>
        {/* Nút chuyển theme (light/dark) */}
        <button className="themeToggleBtn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      
    </nav>
  )
}
export default Navbar // Export component Navbar