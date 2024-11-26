import React from "react";
import styles from "../css/projects.module.css";

const projects = [
  {
    title: "Ecommerce Project",
    description:
      "Developed a RESTful API for an e-commerce platform to manage product listings, user authentication, and order processing.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    
    githubLink: "https://github.com/Saikiran-k-dev/ecomProject",
  },
  {
    title: "Easily Job Portal",
    description:
      "Built a job portal using MVC architecture and EJS as the view engine for rendering dynamic content without a database.",
    technologies: ["Node.js", "Express.js", "EJS"],
   
    githubLink: "https://github.com/Saikiran-k-dev/easilyJobPortal",
  },
  {
    title: "Inventory management",
    description:
      "Built a inventory management portal using MVC architecture and EJS as the view engine for rendering dynamic content without a database.",
    technologies: ["Node.js", "Express.js", "EJS"],
   
    githubLink: "https://github.com/Saikiran-k-dev/easilyJobPortal",
  },
  {
    title: "Postaway",
    description:
      "developed API for Postaway application which is a social media application",
    technologies: ["Node.js","Expressjs","mongodb"],
   
    githubLink: "https://github.com/Saikiran-k-dev/postaway",
  },
  {
    title: "Todo App",
    description:
      "A Todo management app supporting CRUD operations and state management.",
    technologies: ["React.js", "Redux", "Express.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Saikiran-k-dev/todo",
  },
  {
    title: "placement cell project",
    description:
      "An application where students can apply for job. ",
    technologies: ["React.js", "Redux", "Express.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Saikiran-k-dev/placement-cell-project",
  },
  
  {
    title: "Habit Tracker",
    description:
      "A React-based habit tracking app to monitor daily progress with a responsive UI.",
    technologies: ["React.js","Redux"],
    githubLink: "https://github.com/Saikiran-k-dev/habit-tracker",
  },
  {
    title: "Calculator",
    description: "A simple calculator application with a clean React UI.",
    technologies: ["React.js","Redux"],
    githubLink: "https://github.com/Saikiran-k-dev/caluculator-react",
  },
  {
    title: "Slack Command Automation",
    description:
      "Custom Slack commands built using Python Flask to automate team workflows.",
    technologies: ["Python Flask"],
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>My Projects</h2>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <p className={styles.projectTechnologies}>
              <strong>Technologies Used:</strong> {project.technologies.join(", ")}
            </p>
            {project.features && (
              <ul className={styles.projectFeatures}>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                GitHub Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
