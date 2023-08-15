import styles from './card.module.css'
import imagenPorDefecto from '../../imagenes/imagenPorDefecto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function Card({image,name,desc,tec,link}) {

    return(
        <>
        <div className={styles.card}>
        <div className={styles.face}>
            <img src={image?image:imagenPorDefecto} alt="" className={styles.img}/>
            <h3 className={styles.h3Face}>{name}</h3>
        </div>
        <div className={styles.back}>
            <h3 className={styles.h3back}>{name}</h3>
            <p className={styles.p}>{desc}
            </p>
            <div className={styles.divUl}>
            <ul className={styles.list}>
                {
                tec.map((el,index)=>(
                    <li key={index}>
                        <img src={el} alt="" className={styles.ulImg}/>
                        </li>
                ))
                }
            </ul>
            <ul className={styles.listGit}>
                <li><a href="https://github.com/Zarratea/Proyecto-Final" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    <FontAwesomeIcon  icon={faGithub}  className={styles.icon}/>
                </a></li>
                <li>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon}/>
                </a></li>
            </ul>

            </div>
            </div>

        </div>
        </>
    )
}
