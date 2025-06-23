import React, { useEffect, useRef } from "react";
import './Skill.css';
import skill1 from '../../assets/ui-design.png';
import skill2 from '../../assets/website-design.png';

const Skills = () => {
    const skillBarsRef = useRef(null); // Ref cho container chứa các skill bar

    useEffect(() => {
        // Observer cho container skill bar, thêm hiệu ứng khi xuất hiện trên màn hình
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const skillBars = entry.target.children; // Lấy tất cả các skill bar
                    if (entry.isIntersecting) {
                        // Khi xuất hiện, thêm class và delay hiệu ứng từng skill bar
                        Array.from(skillBars).forEach((el, index) => {
                            el.classList.add('animate-on-scroll');
                            el.style.animationDelay = `${index * 0.1}s`;
                        });
                    } else {
                        // Khi ẩn đi, xóa class và reset delay
                        Array.from(skillBars).forEach((el) => {
                            el.classList.remove('animate-on-scroll');
                            el.style.animationDelay = '0s';
                        });
                    }
                });
            },
            { threshold: 0.1 } // Kích hoạt khi 10% container xuất hiện
        );
        // Gắn observer cho container
        if (skillBarsRef.current) {
            observer.observe(skillBarsRef.current);
        }
        // Cleanup khi component unmount
        return () => {
            if (skillBarsRef.current) {
                observer.unobserve(skillBarsRef.current);
            }
        };
    }, []);

    return (
        <section id="skills">
            {/* Tiêu đề và mô tả kỹ năng */}
            <span className="skillTilte">What I do</span>
            <span className="skillDesc">As a frontend developer, I focus on creating engaging and user-friendly web experiences. I have a strong understanding of modern web technologies and am skilled in building responsive and dynamic interfaces.</span>
            {/* Danh sách các skill bar */}
            <div className="skillBars" ref={skillBarsRef}>
                <div className="skillBar">
                    <img src={skill1} alt="UI Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>I have experience in building responsive and dynamic web applications using modern frontend frameworks.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={skill2} alt="Website Design" className="skillBarImg" />
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