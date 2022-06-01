import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import styles from "../css/MainContent.module.css";
import Render from "./ParticlesBackground"
import btn from "../css/Btn.module.css";



function Skills () {
  return (
    <div>
      <NavBar />
      <div>
        <div className={styles.skills_grid}>
          <h1 className={ styles.welcome__heading }>Skills</h1>
          <p className={styles.rich_text}>I estimate for, architect, build, optimise and launch client-side solutions that users love.</p>
          <p className={styles.rich_text}>I'm equally happy interacting directly with clients or working alongside a Delivery Manager - every project is different.</p>
          <p className={styles.rich_text}>Here is a selection of relevant technologies that I enjoy working with with:</p>
        </div>
        <div className={styles.grid_grid_skills}>
        <div className={styles.grid_item_skills}>
          <h3>LANGUAGES</h3> 
          <ul>
            <li>JavaScript (ES6)</li>
            <li>Python</li>
          </ul>
        </div>
        <div className={styles.grid_item_skills}>
        <h3>METHODS & TOOLS</h3>
          <ul>
            <li>Webpack, NPM scripts, Yarn</li>
            <li>Pattern Libraries</li>
            <li>Accessibility testing</li>
          </ul>
        </div>
        <div className={styles.grid_item_skills}>
        <h3>FRAMEWORKS & LIBS</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Redux</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className={styles.grid_item_skills}>
        <h3>ADDITIONAL</h3>
          <ul>
            <li>Agile workflows</li>
            <li>Soft skills</li>
            <li>React</li>
          </ul>
        </div>
        </div>
        <button style={{marginLeft:'100px'}} className={btn.button__primary}><Link to="/Work">Work</Link></button>

      </div>
      <Render />
    </div>
  );
}

export default Skills;
