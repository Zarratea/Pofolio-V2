import {projects} from '../../utils'
import Card from '../Card/card.jsx'
import styles from './cards.module.css'

export default function Cards() {
    return (
        <>
        <div className={styles.div1} >
            <h2 className={styles.h1}>Proyectos</h2>
            <div className={styles.div} >
                {projects.map(({name,desc,image,tec,link})=> <Card
                name={name}
                desc={desc}
                image={image}
                tec={tec}
                link={link}
                key={name}
                />
                )}
            </div>
        </div>
        </>
    )
}