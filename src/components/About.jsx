import React from "react";
import styles from "../css/about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        I’m a dedicated full-stack developer specializing in the MERN stack
        (MongoDB, Express.js, React.js, Node.js). With a passion for building
        dynamic and responsive web applications, I thrive on the challenges of
        both front-end and back-end development. Whether it's crafting intuitive
        user interfaces with React.js, architecting scalable APIs with Node.js,
        or leveraging Python and Python Flask for backend solutions, I aim to
        deliver exceptional digital experiences.
      </p>

      <div className={styles.skillsSection}>
        <h2 className={styles.subtitle}>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skill}>
            <img
              src="/logos/React_logo.png"
              alt="ReactJS"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/Redux_logo.png"
              alt="Redux"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/Html_logo.webp"
              alt="HTML"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/css_logo.png"
              alt="CSS"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/js_logo.png"
              alt="Javascript"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/node_logo.png"
              alt="NodeJs"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/express_logo.png"
              alt="ExpressJs"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/python_logo.png"
              alt="Python"
              className={styles.skillLogo}
            />
          </div>
          <div className={styles.skill}>
            <img
              src="logos/mongo_logo.png"
              alt="MongoDB"
              className={styles.skillLogo}
            />
          </div>
        </div>
      </div>

      <div className={styles.experienceSection}>
        <h2 className={styles.subtitle}>Professional Experience</h2>
        <div className={styles.experienceCard}>
          <h3>Stellapps Technologies</h3>
          <p>
            <strong>Duration:</strong> May 2021 to Present
          </p>
          
              Designed and deployed custom Slack commands using Python Flask,
              optimizing team workflows and streamlining communication.
            
          
              Automated repetitive tasks using Selenium, significantly
              enhancing operational efficiency.
          
         
        </div>
        <div className={styles.experienceCard}>
          <h3>MERN Stack Developer</h3>
          <p>
            Undergoing intensive MERN stack training through Coding Ninjas,
            mastering MongoDB, Express.js, React.js, and Node.js. Completed
            multiple projects showcasing full-stack development expertise.
          </p>
        </div>
        <div className={styles.experienceCard}>
          <h3>Java Developer</h3>
          <p>
            Developed two Android applications:
            
              A data storage and management application.
              An alert monitoring and verification application.
         
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
