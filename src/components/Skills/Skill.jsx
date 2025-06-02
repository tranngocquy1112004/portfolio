import React from "react";
import './Skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTilte">What I do</span>
            <span className="skillDesc">I'm  a skilled Web Designer with experience in creating visual appealing and user-friendly websites bádkjashdashdhaoohoqwnnqwqweoqwoenqwoneoqneoqwnoenoqwneonqwoenoqwneoqwnoenqownewsdasdasdaksnrqqwlnelkwqnlekqwnonvlkxlknlkxncwimoiwmeofoiefnwenweorcxsdasdasdawwqdwghgkyuiyuiytnbeec</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>This is a demo text, you con write your own text in here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>This is a demo text, you con write your own text in here</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills