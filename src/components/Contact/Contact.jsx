import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
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
      {
        threshold: 0.1
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mr1pbic",      // <-- Thay bằng Service ID của bạn
        "template_sssy3kb",     // <-- Thay bằng Template ID của bạn
        formRef.current,
        "JJISXs9R39y0CNQMe"       // <-- Thay bằng Public Key của bạn
      )
      .then(
        (result) => {
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          alert("Gửi thất bại, vui lòng thử lại!");
        }
      );
  };

  return (
    <section id="contact">
      <span className="contactTitle">Contact Me</span>
      {/* <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span> */}
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
