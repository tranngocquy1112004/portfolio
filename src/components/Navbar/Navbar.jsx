import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State kiểm soát menu mobile
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light'); // State theme, lấy từ localStorage nếu có, mặc định là 'light'

  // Khi theme thay đổi, cập nhật class cho body và lưu vào localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

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
        {/* Các mục menu, khi click sẽ scroll mượt đến section tương ứng */}
        <button className="desktopMenuListItem" onClick={() => { scrollToSection("intro"); setIsMenuOpen(false); }}>Home</button>
        <button className="desktopMenuListItem" onClick={() => { scrollToSection("skills"); setIsMenuOpen(false); }}>About Me</button>
        <button className="desktopMenuListItem" onClick={() => { scrollToSection("projects"); setIsMenuOpen(false); }}>My Project</button>
        <button className="desktopMenuListItem" onClick={() => { scrollToSection("contact"); setIsMenuOpen(false); }}>Contact Me</button>
        {/* Nút chuyển đổi theme (light/dark) */}
        <button className="themeToggleBtn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 