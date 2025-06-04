import React from "react";
import "../styles/components/MyWork.scss";


const projects = [
    {
        title: "Flight Planner App",
        subTitle: "React + Spring Boot",
        description: "Search flights, filter results, and recommend seats based on availability and comfort.",
        image: "/assets/images/flight.jpg",
    },
    {
        title: "Typing Code Game",
        subTitle: "React + TypeScript",
        description: "Practice typing code snippets from real languages and track your accuracy & speed.",
        image: "/syntax_logo_2.png",
    },
    {
        title: "Loan Decision Engine",
        subTitle: "Spring Boot + PostgreSQL",
        description: "Calculates credit scores and loan eligibility with business rule logic.",
        image: "/assets/images/loan.jpg",
    },
];

const MyWork = () => {
    return (
        <section className="my-work-section card card--dark">
            <div className="my-work__title">
                <h2 className="card__title card__title--gold">My Stack & Work</h2>
                <p>
                    Here are the core technologies I use — <span className="highlight-text">education, finance, and e-services</span> and
                    the projects where I’ve applied them with purpose.
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
                    {icon: "devicon-intellij-plain", label: "IntelliJ"},
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
    );
};

export default MyWork;
