import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"
function About() {
  return (
    <section className={styles.container} id ="about">
        <h2 className={styles.title}>About
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png"
            )} alt="Me setting with a laptop" 
            className={styles.aboutImage}   
            />
            <ul
            className={styles.aboutItems}
            >
                <l  className={styles.aboutItem}i>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" 
                   
                    />
                    <div  className={styles.aboutItemText}>
                        <h3>
                            Frontend Developer
                        </h3>
                        <p>
                            I'm a frontend developer with competence in building responsive and optimized sites
                        </p>
                    </div>
                </l>
                <li  className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Backend Developer
                        </h3>
                        <p>
                            I'm learning backend technologies.Developing fast and optimised backend systems.
                        </p>
                    </div>
                </li>
                <li  className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>
                            UI Designer
                        </h3>
                        <p>
                            I am good in UI designing and learning advance tools for designing
                        </p>  
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
