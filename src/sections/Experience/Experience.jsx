import styles from './ExperienceStyles.module.css'
import link from '../../assets/link.png'
import citibank from '../../assets/citibank.png'
import synergy from '../../assets/synergy.png'
import learningroom from '../../assets/learningroom.png'
import utaustin from '../../assets/utaustin.png'

function Experience() {
    return (
        <>
            <section className={styles.experiencesContainer}>
                <div className={styles.experienceContainer}>
                    <div className={styles.institution}>
                        <img src={utaustin} className={styles.institutionLogo} alt="UT Austin Logo" />
                        <h3>Graduate Teaching Assistant</h3>
                    </div>
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.institution}>
                        <img src={citibank} className={styles.institutionLogo} alt="Citibank Logo" />
                        <h3>Summer Analyst Intern</h3>
                    </div>
                    <a href="https://drive.google.com/file/d/1KKSeS4PKv8vKfvViBwn067bn7pMM5j91/view" target="_blank">
                        <button className={styles.certificateLink}>
                            Certificate Link
                            <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                        </button>
                    </a>
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.institution}>
                        <img src={synergy} className={styles.institutionLogo} alt="Synergy Maritime Logo" />
                        <h3>Software Development Intern</h3>
                    </div>
                    <a href="https://drive.google.com/file/d/1cCKbLw6eIDLJjbZtq5nwrzcTzqqfOfsc/view" target="_blank">
                        <button className={styles.certificateLink}>
                            Certificate Link
                            <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                        </button>
                    </a>
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.institution}>
                        <img src={learningroom} className={styles.institutionLogo} alt="Learning Room Logo" />
                        <h3>Content Creation Intern</h3>
                    </div>
                    <a href="https://drive.google.com/file/d/1L1tho1aMeK9UbhdPifMijtIqU-cR3tEt/view" target="_blank">
                        <button className={styles.certificateLink}>
                            Certificate Link
                            <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                        </button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Experience