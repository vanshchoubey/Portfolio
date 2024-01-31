import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vanshchoubey999@gmail.com">vanshchoubey999@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vansh-choubey-48641025b/">linkedin.com/vanshchoubey</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/vanshchoubey">github.com/vanshchoubey</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/resumeIcon.png")} alt="Github icon" />
          <a href="https://drive.google.com/file/d/1-y0N70y2qjweKg5d-HJIy61dGLuDJPkY/view">drive.com/vansh-resume</a>
        </li>
      </ul>
    </footer>
  );
};