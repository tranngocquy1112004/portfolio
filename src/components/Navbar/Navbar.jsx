import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import { NavLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { FaMoon, FaSun } from 'react-icons/fa';

// Hàm hỗ trợ cuộn mượt đến section chỉ định trên trang
const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 800, // Thời gian cuộn (ms)
    delay: 0, // Không delay
    smooth: "easeInOutQuart", // Hiệu ứng cuộn mượt
    offset: -70, // Đẩy lên 70px (tránh bị che bởi navbar)
  });
};

const Navbar = () => {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State kiểm soát menu mobile
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light'); // State theme, lấy từ localStorage nếu có, mặc định là 'light'

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
    <nav className="navbar">
      {/* Logo website */}
      <img className="logo" src={logo} alt="logo" />

      {/* Nút mở menu mobile (hamburger) */}
      <div className="mobileMenuBtn" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu chính, hiển thị trên desktop và mobile */}
      <div className={`desktopMenu ${isMenuOpen ? 'active' : ''}`}>
        {/* Các mục menu, khi click sẽ đóng menu mobile */}
        <NavLink className="desktopMenuListItem" to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink className="desktopMenuListItem" to="/aboutme" onClick={() => setIsMenuOpen(false)}>About Me</NavLink>
        <NavLink className="desktopMenuListItem" to="/myproject" onClick={() => setIsMenuOpen(false)}>My Project</NavLink>
        <NavLink className="desktopMenuListItem" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</NavLink>
        {/* Nút chuyển đổi theme (light/dark) */}
        <button className="themeToggleBtn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 