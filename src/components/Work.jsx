import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import styles from "../css/MainContent.module.css";
import Render from "./ParticlesBackground"
import btn from "../css/Btn.module.css";
import { AiFillGithub } from "react-icons/ai";


function Work () {
  return (
    <div>
      <NavBar />
      <div className={styles.page_wrapper}>
        <h1 className={ styles.welcome__heading }>Work</h1>
        <p className={styles.rich_text}>can you visit my repositories on <a href="https://github.com/eldinho2">Github</a>.</p>
        <button className={btn.button__primary}><a href="https://github.com/eldinho2"><AiFillGithub/><br /> <br />github</a></button>        <button className={btn.button__primary}><Link to="/Profile">Profile</Link></button>
      </div>
      <Render />
    </div>
  );
}

export default Work;
