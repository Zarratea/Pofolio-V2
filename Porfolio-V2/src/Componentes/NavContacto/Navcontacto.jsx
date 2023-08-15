import styles from './Navcontacto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub , faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


export default function NavContacto() {
    return(
        <>
        <ul className={styles.divbuttons}>
            <li><a href="https://www.linkedin.com/in/felipe-zarratea-218b40209/" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    <FontAwesomeIcon icon={faLinkedin}  className={styles.icon}/>
                    Linkelin
                </a></li>
            <li><a href="https://github.com/Zarratea" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    <FontAwesomeIcon  icon={faGithub}  className={styles.icon}/>
                    GitHub
                </a></li>
            <li><a href="https://www.instagram.com/felizarratea_/" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    <FontAwesomeIcon icon={faSquareInstagram}  className={styles.icon}/>
                    Instagram
                </a></li>
        </ul>
        </>
    )
}
