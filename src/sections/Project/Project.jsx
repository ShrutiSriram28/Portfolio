import styles from './ProjectStyles.module.css'
import ipms from '../../assets/ipms.png'
import turkey from '../../assets/System Overview - Turkey.png'
import fish from '../../assets/fish.png'
import link from '../../assets/link.png'
import '../../App.css'

function Project() {
    return (
        <>
            <div className={styles.projectContainer}>
                <img src={ipms} className='hover' alt="Investment Portfolio Management System Logo" />
                <a href="https://github.com/ShrutiSriram28/Investment-Portfolio-Management-System/tree/main" target="_blank">
                    <button className={styles.githubLink}>
                        GitHub Repository
                        <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>
            
            <div className={styles.projectContainer}>
                <img src={turkey} id={styles.projectImage} className={styles.paperArch} alt="Architecture" />
                <h3>Segmentation and 3D Reconstruction of Cerebral Arteries</h3>
                <a href="https://drive.google.com/file/d/10CsPtmDcf0tPPTIfo4yJiz1AVdk_ofqw/view?usp=sharing" target="_blank">
                    <button className={styles.githubLink}>
                        Paper Draft
                        <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={styles.projectContainer}>
                <img src={fish} id={styles.projectImage} className={styles.paperArch} alt="Architecture" />
                <h3>Automatic Estimation of Fish Count in Aqua Farms</h3>
            </div>
        </>
    )
}

export default Project