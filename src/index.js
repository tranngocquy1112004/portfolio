// Import React và ReactDOM để render ứng dụng
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import file CSS tổng
import App from './App'; // Import component App gốc
import reportWebVitals from './reportWebVitals'; // Đo hiệu năng (tùy chọn)

// Tạo root để render React app vào phần tử có id='root' trong index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Bật chế độ kiểm tra nghiêm ngặt giúp phát hiện lỗi tiềm ẩn */}
    <App />
  </React.StrictMode>
);

// Đo hiệu năng web, có thể gửi log hoặc hiển thị ra console
// Xem thêm: https://bit.ly/CRA-vitals
reportWebVitals();
