import styles from './PublicationStyles.module.css'
import link from '../../assets/link.png'
import block from '../../assets/block.png'
import semeval from '../../assets/SemEval.png'

function Publication() {
    return (
        <>
            <div className={styles.publicationContainer}>
                <img src={block} className={styles.paperArch} alt="Architecture" />
                <h3>Multimodal Forgery Detection in Videos using a Tri-Network Model</h3>
                <a href="https://drive.google.com/file/d/1JsP-t-oH0lFVKVPyZXgycja8E5FOmOkS/view" target="_blank">
                    <button className={styles.paperLink}>
                        Paper Link
                        <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={styles.publicationContainer}>
                <img src={semeval} className={styles.paperArch} alt="Architecture" />
                <h3>PoSh at SemEval-2023 Task 10: Explainable Detection of Online Sexism</h3>
                <a href="https://aclanthology.org/2023.semeval-1.177/" target="_blank">
                    <button className={styles.paperLink}>
                        Paper Link
                        <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={styles.publicationContainer}>
                <h3>A Fusion Approach for Web Search Result Diversification using Machine Learning Algorithms</h3>
                <a href="https://ceur-ws.org/Vol-3180/paper-107.pdf" target="_blank">
                    <button className={styles.paperLink}>
                        Paper Link
                        <img src={link} className={styles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>
        </>
    )
}

export default Publication