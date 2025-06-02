import React from "react"; 
import './Project.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';

const Project = () => {
    return (
        <section id="projects">
            <span className="projectTitle">My Projects</span>
            <span className="projectDesc">Here are some of my recent works that showcase my skills and experience</span>
            <div className="projectBars">
                <div className="projectBar">
                    <img src={Project1} alt="Project1" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Project 1</h2>
                        <p>This is a classic Breakout/Brick Breaker game built with HTML5 Canvas and JavaScript. The player controls a paddle to bounce a ball and break all the bricks. The game features keyboard controls, collision detection, win/lose conditions, and automatic reset. The code is organized into separate modules for the ball, paddle, bricks, and main game logic, making it easy to maintain and extend.</p>
                        <a href="https://tranngocquygame.netlify.app/">Link:https://tranngocquygame.netlify.app/</a>
                    </div>
                </div>
                <div className="projectBar">
                    <img src={Project2} alt="Project2" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Project 2</h2>
                        <p>A ReactJS e-commerce app for mobile phones with user authentication, product browsing, detailed product pages, shopping cart, checkout, order history, user profile, and admin dashboard for management.</p>
                        <a href="https://tranngocquy1112004.github.io/MobileStore/">Link:https://tranngocquy1112004.github.io/MobileStore/</a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project