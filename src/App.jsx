// Import các thư viện và component cần thiết
import Navbar from './components/Navbar/Navbar'; // Thanh điều hướng
import Intro from './components/Intro/Intro'; // Phần giới thiệu
import Skills from './components/Skills/Skill'; // Phần kỹ năng
import Project from './components/Project/Project'; // Phần dự án
import Contact from './components/Contact/Contact'; // Phần liên hệ

function App() {
  // App là component gốc, chứa toàn bộ layout chính
  return (
    <div className='App'>
      {/* Navbar luôn hiển thị ở trên cùng */}
      <Navbar />
      {/* Các section chính của portfolio */}
      <Intro />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App; // Xuất component App để sử dụng ở index.js
