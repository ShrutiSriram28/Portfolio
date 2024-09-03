import styles from './IntroStyles.module.css'
import introImg from '../../assets/introImg.jpg'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/email.png'
import cv from '../../assets/Resume - Shruti Sriram.pdf'
import TypeWriter from 'typewriter-effect'

function Intro() {
    return (
        <>
            <section className={styles.mainContainer}>
                <div className={styles.nameIntro}>
                    <TypeWriter 
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Hello! I am Shruti Sriram :)")
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            loop: true, // Ensures the typing effect loops indefinitely
                            wrapperClassName: styles.cursor,
                        }}
                    />
                </div> 

                <section id="intro" className={styles.container}>
                    <div className={styles.colorModeContainer}>
                        <img 
                            className={styles.intro} 
                            src={introImg} 
                            alt='Profile Picture of Shruti Sriram' 
                        />
                    </div>
                    <div className={styles.info}>
                        <h2>
                            ML, CV & AI Enthusiast
                        </h2>
                        <span>
                            <a href="https://github.com/ShrutiSriram28" target="_blank">
                                <img src={github} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/shruti-sriram-953927252" target="_blank">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="mailto:svshruti@utexas.edu" target="_blank">
                                <img src={email} alt="E-Mail" />
                            </a>
                        </span>
                        <p className={styles.description}>
                            With a Passion to Create Modern AI Applications
                        </p>
                        <a href={cv} download>
                            <button className="hover">
                                Resume
                            </button>
                        </a>

                    </div>
                </section>
            </section>
        </>
    )
}

export default Intro