import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 
import "./Contact.css"; 

const Contact = () => {
  const formRef = useRef(null); // Ref cho form liên hệ
  const [done, setDone] = useState(false); // State kiểm soát trạng thái gửi thành công

  useEffect(() => {
    // Observer để tạo hiệu ứng khi form xuất hiện trên màn hình
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
          } else {
            entry.target.classList.remove('animate-on-scroll');
          }
        });
      },
      { threshold: 0.1 } // Kích hoạt khi 10% form xuất hiện
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    // Cleanup: hủy observer khi component unmount để tránh memory leak
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []); // Chỉ chạy một lần khi component mount

  // Hàm gửi email khi submit form
  const sendEmail = (e) => {
    e.preventDefault(); // Ngăn reload trang
    emailjs
      .sendForm(
        "service_mr1pbic",      // ID dịch vụ EmailJS
        "template_sssy3kb",     // ID template EmailJS
        formRef.current,        // DOM form để lấy dữ liệu
        "JJISXs9R39y0CNQMe"     // Public key EmailJS
      )
      .then(
        (result) => {
          setDone(true); // Hiển thị thông báo thành công
          formRef.current.reset(); // Reset form
        },
        (_) => {
          alert("Gửi thất bại, vui lòng thử lại!"); // Thông báo lỗi
        }
      );
  };

  return (
    <section id="contact"> 
      <span className="contactTitle">Contact Me</span>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" className="name" placeholder="Your Name" name="user_name" required />
        <input type="email" className="email" placeholder="Your Email" name="user_email" required />
        <textarea className='msg' name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send</button>
        {done && <span className="success-msg">Thank you for your message!</span>}
      </form>
    </section>
  );
};

export default Contact; 