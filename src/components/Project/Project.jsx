import React, { useEffect, useRef } from "react";
import './Project.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';

// Component Project hiển thị các dự án với hiệu ứng khi xuất hiện trên màn hình
const Project = () => {
    // Tạo một ref để lưu trữ các tham chiếu DOM của từng project bar
    const projectRefs = useRef([]);

    useEffect(() => {
        // Khởi tạo IntersectionObserver để quan sát khi các project bar xuất hiện trên màn hình
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Nếu phần tử xuất hiện trên màn hình, thêm class để kích hoạt animation
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                    } else {
                        // Nếu phần tử không còn trên màn hình, loại bỏ class animation
                        entry.target.classList.remove('animate-on-scroll');
                    }
                });
            },
            { threshold: 0.1 } // Observer sẽ kích hoạt khi 10% phần tử xuất hiện trên màn hình
        );

        // Đăng ký từng project bar với observer
        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Cleanup: Hủy đăng ký khi component bị unmount để tránh memory leak
        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []); // Chỉ chạy một lần khi component mount

    return (
        <section id="projects">
            {/* Tiêu đề dự án */}
            <span className="projectTitle">My Projects</span>
            {/* Mô tả dự án */}
            <span className="projectDesc">Here are some of my recent works that showcase my skills and experience</span>
            {/* Danh sách các project bar, mỗi project bar gồm hình ảnh và mô tả */}
            <div className="projectBars">
                {/* Project 1 */}
                <div className="projectBar" ref={el => projectRefs.current[0] = el}>
                    <img src={Project1} alt="Project1" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Project 1</h2>
                        <p>
                            This is a classic Breakout/Brick Breaker game built with HTML5 Canvas and JavaScript. The player controls a paddle to bounce a ball and break all the bricks. The game features keyboard controls, collision detection, win/lose conditions, and automatic reset. The code is organized into separate modules for the ball, paddle, bricks, and main game logic, making it easy to maintain and extend.
                        </p>
                        <a href="https://tranngocquygame.netlify.app/">Link:https://tranngocquygame.netlify.app/</a>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="projectBar" ref={el => projectRefs.current[1] = el}>
                    <img src={Project2} alt="Project2" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Project 2</h2>
                        <p>
                            A ReactJS e-commerce app for mobile phones with user authentication, product browsing, detailed product pages, shopping cart, checkout, order history, user profile, and admin dashboard for management.
                        </p>
                        <a href="https://tranngocquy1112004.github.io/MobileStore/">Link:https://tranngocquy1112004.github.io/MobileStore/</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;