import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/MainContent.module.css";
import NavBar from "./NavBar";
import Render from "./ParticlesBackground";
import btn from "../css/Btn.module.css";


export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.page_wrapper}>
        <h1 className={ styles.welcome__heading }>Vinicius Gonçalves,<br /> Full Stack Developer</h1>
        <p className={styles.rich_text}>Hi. I produce elegant, performant, and accessible digital experiences.</p>
          <div className={btn.welcome__buttons}>
              <button className={btn.button__primary}><Link to="/Work">Work</Link></button>
              <button className={btn.button__primary}><Link to="/Profile">Profile</Link></button>
          </div>
      </div>
      <Render />
  </div>
  );
};
