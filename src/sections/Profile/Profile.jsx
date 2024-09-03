import projectStyles from '../Project/ProjectStyles.module.css'
import publicationStyles from '../Publication/PublicationStyles.module.css'
import experienceStyles from '../Experience/ExperienceStyles.module.css'
import profileStyles from './ProfileStyles.module.css'
import ipms from '../../assets/ipms.png'
import turkey from '../../assets/System Overview - Turkey.png'
import fish from '../../assets/fish.png'
import link from '../../assets/link.png'
import citibank from '../../assets/citibank.png'
import synergy from '../../assets/synergy.png'
import learningroom from '../../assets/learningroom.png'
import utaustin from '../../assets/utaustin.png'
import block from '../../assets/block.png'
import semeval from '../../assets/SemEval.png'

function Profile() {
    return (
        <>
            <h1 className={profileStyles.sectionTitle}>PROJECTS</h1>
            <div className={projectStyles.projectContainer}>
                <img src={ipms} className='hover' alt="Investment Portfolio Management System Logo" />
                <a href="https://github.com/ShrutiSriram28/Investment-Portfolio-Management-System/tree/main" target="_blank">
                    <button className={projectStyles.githubLink}>
                        GitHub Repository
                        <img src={link} className={projectStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>
            
            <div className={projectStyles.projectContainer}>
                <img src={turkey} id={projectStyles.projectImage} className={projectStyles.paperArch} alt="Architecture" />
                <h3>Segmentation and 3D Reconstruction of Cerebral Arteries</h3>
                <a href="https://drive.google.com/file/d/10CsPtmDcf0tPPTIfo4yJiz1AVdk_ofqw/view?usp=sharing" target="_blank">
                    <button className={projectStyles.githubLink}>
                        Paper Draft
                        <img src={link} className={projectStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={projectStyles.projectContainer}>
                <img src={fish} id={projectStyles.projectImage} className={projectStyles.paperArch} alt="Architecture" />
                <h3>Automatic Estimation of Fish Count in Aqua Farms</h3>
            </div>

            <h1 className={profileStyles.sectionTitle}>PUBLICATIONS</h1>
            <div className={publicationStyles.publicationContainer}>
                <img src={block} className={publicationStyles.paperArch} alt="Architecture" /> 
                <h3>Multimodal Forgery Detection in Videos using a Tri-Network Model</h3>
                <a href="https://drive.google.com/file/d/1JsP-t-oH0lFVKVPyZXgycja8E5FOmOkS/view" target="_blank">
                    <button className={publicationStyles.paperLink}>
                        Paper Link
                        <img src={link} className={publicationStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={publicationStyles.publicationContainer}>
                <img src={semeval} className={publicationStyles.paperArch} alt="Architecture" />
                <h3>PoSh at SemEval-2023 Task 10: Explainable Detection of Online Sexism</h3>
                <a href="https://aclanthology.org/2023.semeval-1.177/" target="_blank">
                    <button className={publicationStyles.paperLink}>
                        Paper Link
                        <img src={link} className={publicationStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={publicationStyles.publicationContainer}>
                <h3>A Fusion Approach for Web Search Result Diversification using Machine Learning Algorithms</h3>
                <a href="https://ceur-ws.org/Vol-3180/paper-107.pdf" target="_blank">
                    <button className={publicationStyles.paperLink}>
                        Paper Link
                        <img src={link} className={publicationStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>
            
            <h1 className={profileStyles.sectionTitle}>EXPERIENCES</h1>
            <div className={experienceStyles.experienceContainer}>
                <div className={experienceStyles.institution}>
                    <img src={utaustin} className={experienceStyles.institutionLogo} alt="UT Austin Logo" />
                    <h3>Graduate Teaching Assistant</h3>
                </div>
            </div>

            <div className={experienceStyles.experienceContainer}>
                <div className={experienceStyles.institution}>
                    <img src={citibank} className={experienceStyles.institutionLogo} alt="Citibank Logo" />
                    <h3>Summer Analyst Intern</h3>
                </div>
                <a href="https://drive.google.com/file/d/1KKSeS4PKv8vKfvViBwn067bn7pMM5j91/view" target="_blank">
                    <button className={experienceStyles.certificateLink}>
                        Certificate Link
                        <img src={link} className={experienceStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={experienceStyles.experienceContainer}>
                <div className={experienceStyles.institution}>
                    <img src={synergy} className={experienceStyles.institutionLogo} alt="Synergy Maritime Logo" />
                    <h3>Software Development Intern</h3>
                </div>
                <a href="https://drive.google.com/file/d/1cCKbLw6eIDLJjbZtq5nwrzcTzqqfOfsc/view" target="_blank">
                    <button className={experienceStyles.certificateLink}>
                        Certificate Link
                        <img src={link} className={experienceStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>

            <div className={experienceStyles.experienceContainer}>
                <div className={experienceStyles.institution}>
                    <img src={learningroom} className={experienceStyles.institutionLogo} alt="Learning Room Logo" />
                    <h3>Content Creation Intern</h3>
                </div>
                <a href="https://drive.google.com/file/d/1L1tho1aMeK9UbhdPifMijtIqU-cR3tEt/view" target="_blank">
                    <button className={experienceStyles.certificateLink}>
                        Certificate Link
                        <img src={link} className={experienceStyles.linkLogo} alt="Link Logo"/>
                    </button>
                </a>
            </div>
        </>
    )
}

export default Profile