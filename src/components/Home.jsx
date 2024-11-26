import React from "react";
import styles from "../css/home.module.css";

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hi, I'm Saikiran K</h1>
        <p className={styles.subtitle}>A Passionate MERN Stack Developer</p>
        <div className={styles.buttons}>
          <a href="https://saikirankdev.netlify.app/projects" className={styles.btn}>
            View My Work
          </a>
          <a href="https://saikirankdev.netlify.app/contact" className={styles.btnSecondary}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
