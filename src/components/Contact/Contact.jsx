import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mr1pbic",      // <-- Thay bằng Service ID của bạn
        "template_sssy3kb",     // <-- Thay bằng Template ID của bạn
        form.current,
        "JJISXs9R39y0CNQMe"       // <-- Thay bằng Public Key của bạn
      )
      .then(
        (result) => {
          setDone(true);
          form.current.reset();
        },
        (error) => {
          alert("Gửi thất bại, vui lòng thử lại!");
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send</button>
        {done && <span className="success-msg">Thank you for your message!</span>}
      </form>
    </section>
  );
};

export default Contact;
