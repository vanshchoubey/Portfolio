import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Vansh</h1>
            <p className={styles.description}>
                I'm a frontend developer competence in 
                React.js. Reach out if you'd like to learn more!
            </p>
            <a href="mailto:vanshchoubey999@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")}alt="Hero Image of me" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero