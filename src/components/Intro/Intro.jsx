import React, { useEffect, useRef } from "react";
import './Intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/bg.png'
import cv from '../../assets/Tran-Ngoc-Quy-CV.pdf'

const Intro = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const textObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                        const textElements = entry.target.children;
                        Array.from(textElements).forEach((el, index) => {
                            el.style.animationDelay = `${index * 0.15}s`;
                        });
                    } else {
                        entry.target.classList.remove('animate-on-scroll');
                        const textElements = entry.target.children;
                        Array.from(textElements).forEach((el) => {
                            el.style.animationDelay = '0s';
                        });
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

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
            {
                threshold: 0.1
            }
        );

        if (textRef.current) {
            textObserver.observe(textRef.current);
        }
        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        return () => {
            if (textRef.current) {
                textObserver.unobserve(textRef.current);
            }
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <section id="intro" ref={sectionRef}>
            <div className="introContent" ref={textRef}>
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Quy</span><br />Frontend Developer</span>
                <p className="introPara">I am a skilled and passionate web designer with experience in creating <br/> visually appealing and user-friendly websites.</p>
                <a href={cv} download="Tran-Ngoc-Quy-CV.pdf" className="btn">Download CV</a>

            </div>
            <img src={bg} alt="Profile" className="bg" ref={imageRef} />
        </section>
    )
}

export default Intro;
