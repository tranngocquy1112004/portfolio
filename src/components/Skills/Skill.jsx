import React, { useEffect, useRef } from "react";
import './Skill.css';
import skill1 from '../../assets/ui-design.png';
import skill2 from '../../assets/website-design.png';

const Skills = () => {
    const skillBarsRef = useRef(null); // Ref for the skill bars container

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const skillBars = entry.target.children; // Get all skill bars

                    if (entry.isIntersecting) {
                        Array.from(skillBars).forEach((el, index) => {
                            // Add animation class and apply staggered delay
                            el.classList.add('animate-on-scroll');
                            el.style.animationDelay = `${index * 0.1}s`; // Adjust delay as needed
                        });
                    } else {
                        Array.from(skillBars).forEach((el) => {
                            // Remove animation class and reset delay
                            el.classList.remove('animate-on-scroll');
                            el.style.animationDelay = '0s';
                        });
                    }
                });
            },
            {
                threshold: 0.1 // Trigger when 10% of the container is visible
            }
        );

        // Observe the skill bars container
        if (skillBarsRef.current) {
            observer.observe(skillBarsRef.current);
        }

        // Cleanup observer when component unmounts
        return () => {
            if (skillBarsRef.current) {
                observer.unobserve(skillBarsRef.current);
            }
        };

    }, []); // Run useEffect once on mount

    return (
        <section id="skills">
            <span className="skillTilte">What I do</span>
            <span className="skillDesc">As a frontend developer, I focus on creating engaging and user-friendly web experiences. I have a strong understanding of modern web technologies and am skilled in building responsive and dynamic interfaces.</span>
            <div className="skillBars" ref={skillBarsRef}>
                <div className="skillBar">
                    <img src={skill1} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>I have experience in building responsive and dynamic web applications using modern frontend frameworks.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={skill2} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I can create intuitive and visually appealing user interfaces that provide excellent user experiences.</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Skills