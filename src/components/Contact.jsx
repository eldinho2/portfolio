import React from "react";
import NavBar from "./NavBar";
import styles from "../css/MainContent.module.css";
import Render from "./ParticlesBackground"
import btn from "../css/Btn.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs"; 


function Contact () {
  return (
    <div>
      <NavBar />
      <div className={styles.page_wrapper}>
        <h1 className={ styles.welcome__heading }>Contact</h1>
        <p className={styles.rich_text}>you can find me here</p>
        <br />
        <button className={btn.button__primary}><a href="https://github.com/eldinho2"><AiFillGithub/><br /> <br />github</a></button>
        <button className={btn.button__primary}><a href="https://www.linkedin.com/in/vinicius-saiao-goncalves/"><BsLinkedin/><br /> <br />LinkedIn</a></button>
        <button className={btn.button__primary}><a href="https://www.linkedin.com/in/vinicius-saiao-goncalves/"><BsWhatsapp/> <br /> <br />(21) 999548693</a></button>
      </div>
      <Render />
    </div>
  );
}

export default Contact;
