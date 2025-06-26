import React from "react";
import "../styles/components/MyWork.scss";


const projects = [
    {
        title: "Opacity Puzzle Game",
        subTitle: "React + tailwind",
        description: "A dynamic puzzle game where each piece's opacity changes based on its proximity to the correct position, offering visual cues to guide players.",
        image: "/puzzlepurplebg_square.png",
    },
    {
        title: "Rental Property Website",
        subTitle: "Vue.js",
        description: "Webpage for a rental property in Hungary.",
        image: "/badacsony_webpage_screenshot_square.png",
    },
    {
        title: "Flight Planner App",
        subTitle: "Spring Boot + PostgreSQL + React",
        description: "Search flights, filter results, and filter seats based on availability and location.",
        image: "/plane-icon-square.png",
    },
    {
        title: "Typing Code Game",
        subTitle: "Node.js + React + TypeScript",
        description: "Practice typing code snippets from real languages and track your accuracy & speed.",
        image: "/syntax_logo_goldbg_square.png",
    },
];

const courses = [
    {
        title: "Data Science in Business Decision Making",
        image: "/UT_logo-nobg_scaled.png",
        certificateUrl: "https://drive.google.com/file/d/1YGfdoiRxxFLWRi0wOU-ajrRsOCCs6D4-/view",
    },
    {
        title: "Vali-it Full-Stack Junior Development",
        image: "/valiit_logo-nobg_scaled.png",
        certificateUrl: "https://drive.google.com/file/d/1xS9VL7EKNYhXEUtR-CWraQuRKKla0kSW/view",
    },
    {
        title: "Basic Accounting Standards and Practices",
        image: "/Majandusarvestus_logo-nobg_scaled.png",
        certificateUrl: "https://drive.google.com/file/d/1isRMZIlRed4iB1CooNtRrO1mIEmNAUuO/view",
    },
];

const MyWork = () => {
    return (
        <>
            <section className="my-work-section card card--dark" id="projects">
                <div className="my-work__title">
                    <h2 className="card__title card__title--gold">Tech Stack & Latest Projects</h2>
                    <p>
                        Here are the core technologies I use <span className="highlight-text">and the hands-on experience I’ve built up along the way</span> showcased in the projects where I’ve applied them.
                    </p>
                </div>
                <div className="tech-icons">
                    {[
                        {icon: "devicon-java-plain", label: "Java"},
                        {icon: "devicon-spring-plain", label: "Spring Boot"},
                        {icon: "devicon-react-original", label: "React"},
                        {icon: "devicon-vuejs-plain", label: "Vue.js"},
                        {icon: "devicon-postgresql-plain", label: "PostgreSQL"},
                        {icon: "devicon-tailwindcss-plain", label: "Tailwind"},
                        {icon: "devicon-typescript-plain", label: "TypeScript"},
                        {icon: "devicon-sass-original", label: "SCSS"},
                        {icon: "devicon-nodejs-plain", label: "Node.js"},
                        {icon: "devicon-javascript-plain", label: "JavaScript"},
                    ].map((tech, i) => (
                        <div className="tech-icon" key={i}>
                            <i className={tech.icon}></i>
                            <p>{tech.label}</p>
                        </div>
                    ))}
                </div>


                <div className="project-articles">
                    {projects.map((proj, i) => (
                        <div key={i} className="article article--dark">
                            <div className="article__image-container">
                                <img src={proj.image} alt={proj.title + " image"}/>
                            </div>
                            <p className="article__sub-title top">{proj.subTitle}</p>
                            <h4 className="article__title">{proj.title}</h4>
                            <p className="article__description">{proj.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="courses-section card card--light">
                <div className="courses-header">
                    <h2 className="card__title card__title--gold">Latest Courses</h2>
                    <p>
                        These are some of the <span
                        className="highlight-text">practical and theoretical courses</span> I’ve
                        completed to grow as a developer and understand business needs.
                    </p>
                </div>

                <div className="course-cards">
                    {courses.map((course, i) => (
                        <div key={i} className="course-card">
                            <div className="course-card__logo">
                                <img src={course.image} alt={course.title + " logo"}/>
                            </div>
                            <p>{course.title}</p>
                            <a
                                href={course.certificateUrl}
                                className="course-card__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Certificate →
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
        ;
};

export default MyWork;
