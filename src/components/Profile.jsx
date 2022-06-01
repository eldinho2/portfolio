import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import styles from "../css/MainContent.module.css";
import Render from "./ParticlesBackground"
import btn from "../css/Btn.module.css";



function Profile () {
  return (
    <div>
      <NavBar />
      <div className={styles.page_wrapper}>
        <h1 className={ styles.welcome__heading }>Profile</h1>
        <p className={styles.rich_text}>I'm a Junior Full-Stack Developer.</p>
        <p className={styles.rich_text}>Passionate about innovation and technology, I try to use the potential of programming to make a difference in other people's lives.</p>
        <p className={styles.rich_text}>While I spend most of my time with UIs, I also enjoy getting involved in design, back-end development and helping improve agile processes.</p>
        <p className={styles.rich_text}>Browse some of my <Link to="/Work">work</Link>, view my <Link to="/Skills">skills</Link>, or <Link to="/Contact">get in touch.</Link></p>
        <p className={styles.rich_text}>You can also find me on <a href="https://github.com/eldinho2">Github</a> or <a href="https://www.linkedin.com/in/vinicius-saiao-goncalves/">LinkedIn.</a></p>
        <button className={btn.button__primary}><Link to="/Skills">Skills</Link></button>
        
      </div>
      <Render />
    </div>
  );
}

export default Profile;
