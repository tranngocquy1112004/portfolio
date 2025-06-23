// Import các thư viện và component cần thiết
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Router cho điều hướng
import Navbar from './components/Navbar/Navbar'; // Thanh điều hướng
import Intro from './components/Intro/Intro'; // Phần giới thiệu
import Skills from './components/Skills/Skill'; // Phần kỹ năng
import Project from './components/Project/Project'; // Phần dự án
import Contact from './components/Contact/Contact'; // Phần liên hệ

function App() {
  // App là component gốc, chứa toàn bộ layout chính
  return (
    // Router bọc toàn bộ ứng dụng để sử dụng điều hướng
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        {/* Navbar luôn hiển thị ở trên cùng */}
        <Navbar />
        {/* Các section chính của portfolio */}
        <Intro />
        <Skills />
        <Project />
        <Contact />
      </div>
    </Router>
  );
}

export default App; // Xuất component App để sử dụng ở index.js
