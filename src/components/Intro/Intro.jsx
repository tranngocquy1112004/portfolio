import React from "react";
import './Intro.css';
import bg from '../../assets/bg.png'
import { Link } from "react-scroll";
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Tran Ngoc Quy</span> <br /> Website Designer</span>
                <p className="introPara">I'm  a skilled Web Designer with experience in creating <br /> visual appealing and user-friendly websites</p>
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;   