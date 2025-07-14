import React, { useEffect, useRef } from "react";
import './Skill.css';
import skill1 from '../../assets/ui-design.png';
import skill2 from '../../assets/website-design.png';

// Component Skills hiển thị các kỹ năng với hiệu ứng khi xuất hiện trên màn hình
const Skills = () => {
    // Tạo ref để tham chiếu đến container chứa các skill bar
    const skillBarsRef = useRef(null);

    useEffect(() => {
        // Tạo một IntersectionObserver để quan sát sự xuất hiện của container skill bar trên màn hình
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Lấy tất cả các phần tử con (skill bar) trong container
                    const skillBars = entry.target.children;
                    if (entry.isIntersecting) {
                        // Nếu container xuất hiện trên màn hình
                        // Thêm class và set animation delay cho từng skill bar để tạo hiệu ứng xuất hiện lần lượt
                        Array.from(skillBars).forEach((el, index) => {
                            el.classList.add('animate-on-scroll');
                            el.style.animationDelay = `${index * 0.1}s`;
                        });
                    } else {
                        // Nếu container không còn trên màn hình
                        // Xóa class và reset animation delay
                        Array.from(skillBars).forEach((el) => {
                            el.classList.remove('animate-on-scroll');
                            el.style.animationDelay = '0s';
                        });
                    }
                });
            },
            { threshold: 0.1 } // Observer sẽ kích hoạt khi 10% container xuất hiện trên màn hình
        );

        // Gắn observer vào container skill bar
        if (skillBarsRef.current) {
            observer.observe(skillBarsRef.current);
        }

        // Cleanup: Hủy observer khi component bị unmount
        return () => {
            if (skillBarsRef.current) {
                observer.unobserve(skillBarsRef.current);
            }
        };
    }, []); // Chỉ chạy một lần khi component mount

    return (
        <section id="skills">
            {/* Tiêu đề kỹ năng */}
            <span className="skillTilte">What I do</span>
            {/* Mô tả kỹ năng */}
            <span className="skillDesc">
                As a frontend developer, I focus on creating engaging and user-friendly web experiences. I have a strong understanding of modern web technologies and am skilled in building responsive and dynamic interfaces.
            </span>
            {/* Danh sách các skill bar, mỗi skill bar gồm icon và mô tả */}
            <div className="skillBars" ref={skillBarsRef}>
                {/* Skill 1: Frontend Development */}
                <div className="skillBar">
                    <img src={skill1} alt="UI Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>I have experience in building responsive and dynamic web applications using modern frontend frameworks.</p>
                    </div>
                </div>
                {/* Skill 2: UI/UX Design */}
                <div className="skillBar">
                    <img src={skill2} alt="Website Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I can create intuitive and visually appealing user interfaces that provide excellent user experiences.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;