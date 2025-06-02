import React from "react";
import './Intro.css';
import bg from '../../assets/bg.png'
import cv from '../../assets/Tran-Ngoc-Quy-CV.pdf'
import { Link } from "react-scroll";
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Tran Ngoc Quy</span> <br /> Website Designer</span>
                <p className="introPara">I'm  a skilled Web Designer with experience in creating <br /> visual appealing and user-friendly websites</p>
                <button className="btn"><a href={cv} download="Tran-Ngoc-Quy-CV.pdf">Download CV</a></button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;   