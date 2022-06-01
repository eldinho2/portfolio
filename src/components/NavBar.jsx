import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/NavBar.module.css";

function NavBar() {
	return (
	<nav className={styles.navBar} >
		<ul className={styles.list}>
			<li className={styles.item}>
				<Link to="/">Home</Link>
			</li>
			<li className={styles.item}>
				<Link to="/Profile">Profile</Link>
			</li>
			<li className={styles.item}>
				<Link to="/Skills">Skills</Link>
			</li>
			<li className={styles.item}>
				<Link to="/Work">Work</Link>
			</li>
			<li className={styles.item}>
				<Link to="/Contact">Contact</Link>
			</li>
		</ul>
	</nav>
	);
}

export default NavBar;