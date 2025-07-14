import React, { useEffect, useRef } from "react";
import './Intro.css';
import bg from '../../assets/bg.png';
import cv from '../../assets/Tran-Ngoc-Quy-CV.pdf';

const Intro = () => {
    // Ref cho section chính, khối text và hình ảnh để dùng với IntersectionObserver
    const sectionRef = useRef(null); // Ref cho section chính
    const textRef = useRef(null);    // Ref cho khối text
    const imageRef = useRef(null);   // Ref cho hình ảnh

    useEffect(() => {
        // Observer cho section chính (hiệu ứng tổng thể)
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
            { threshold: 0.1 } // Kích hoạt khi 10% phần tử xuất hiện
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Observer cho khối text, thêm hiệu ứng delay cho từng dòng
        const textObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                        // Thêm delay cho từng phần tử con để hiệu ứng xuất hiện lần lượt
                        const textElements = entry.target.children;
                        Array.from(textElements).forEach((el, index) => {
                            el.style.animationDelay = `${index * 0.15}s`;
                        });
                    } else {
                        entry.target.classList.remove('animate-on-scroll');
                        // Reset delay khi rời khỏi màn hình
                        const textElements = entry.target.children;
                        Array.from(textElements).forEach((el) => {
                            el.style.animationDelay = '0s';
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observer cho hình ảnh (hiệu ứng xuất hiện ảnh)
        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                    } else {
                        entry.target.classList.remove('animate-on-scroll');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Đăng ký observer cho từng phần tử
        if (textRef.current) {
            textObserver.observe(textRef.current);
        }
        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        // Cleanup: hủy observer khi component unmount để tránh memory leak
        return () => {
            if (textRef.current) {
                textObserver.unobserve(textRef.current);
            }
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
        };
    }, []); // Chỉ chạy một lần khi component mount

    return (
        <section id="intro" ref={sectionRef}>
            {/* Khối nội dung giới thiệu */}
            <div className="introContent" ref={textRef}>
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Quy</span><br />Frontend Developer</span>
                <p className="introPara">I am a skilled and passionate web designer with experience in creating <br/> visually appealing and user-friendly websites.</p>
                {/* Nút tải CV */}
                <a href={cv} download="Tran-Ngoc-Quy-CV.pdf" className="btn">Download CV</a>
            </div>
            {/* Ảnh đại diện */}
            <img src={bg} alt="Profile" className="bg" ref={imageRef} />
        </section>
    );
};

export default Intro; 