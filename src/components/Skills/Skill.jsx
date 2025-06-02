import React from "react";
import './Skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTilte">What I do</span>
            <span className="skillDesc">I am a passionate and motivated intern eager to gain hands-on experience in UI/UX and web design. I am enthusiastic about learning new design tools, understanding user needs, and creating visually appealing as well as user-friendly interfaces. My goal is to contribute to real projects, improve my skills, and grow as a designer in a professional environment.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        {/* <p>This is a demo text, you con write your own text in here</p> */}
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        {/* <p>This is a demo text, you con write your own text in here</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills