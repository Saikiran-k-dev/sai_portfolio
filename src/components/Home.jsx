import React from "react";
import styles from "../css/home.module.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.leftContainer}>
          <div >
            <h1 className={styles.hiTitle}>HI THERE!</h1>
          </div>
          <div className={styles.intro}>
            <h1 className={styles.hiTitle}>I'M</h1><h1> SAI</h1>
          </div>
          <div>
            <h6>MERn developer/Python developer</h6>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores dolor cupiditate nostrum voluptas facilis quisquam vitae dolore suscipit debitis ipsam earum repudiandae, eos dolorem unde dignissimos. Consequuntur, doloribus quibusdam!</p>
          </div>
          </div>
        </div>
        <div className={styles.rightSection}></div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
