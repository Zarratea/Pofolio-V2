import styles from './about.module.css'
import Lottie from '../Lottie/lottie';
import useWindowDimensions from '../Hook/hooks';


export default function About() {
    const { width } = useWindowDimensions();
    return(
        <>
        <div  className={styles.div1}>
            <div>
            <h2 className={styles.h1}>Acerca de mi</h2>
            <div className={styles.pLottie}>
                { width > 860 &&(<div className={styles.Lottie}>
                    <Lottie animation={'about'} idcontainer={'containerAbout'}/>
                </div>)}
                <div>
                    <p className={styles.p}>Comence en la programacion en el secundario , aprendiendo diagramas de flujo y c++, y retome en 2022 con cursos de python. Pero donde realice gran parte de mi aprendizaje fue en SoyHenry.</p>
                    <p className={styles.p}><b>Mi objetivo es crear productos que ofrezcan experiencias excepcionales, con un diseño atractivo, intuitivo y de alta calidad.</b></p>
                    <p className={styles.p}>Estoy siempre dispuesto a aprender nuevas tecnologías y a afrontar nuevos desafíos laborales que me permitan seguir creciendo profesionalmente.</p>
                </div>
                { width < 860 &&(<div className={styles.Lottie}>
                    <Lottie animation={'about'} idcontainer={'containerAbout'}/>
                </div>)}
            </div>
            <h2 className={styles.h2}>Tecnologias</h2>
                <div className={styles.div}>
                    <div>
                        <h3 className={styles.h3}>Frontend</h3>
                        <ul className={styles.li}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.h3}>Backend</h3>
                        <ul className={styles.li}>
                            <li>Express</li>
                            <li>NodeJs</li>
                            <li>Python</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.h3}>DataBase</h3>
                        <ul className={styles.li}>
                            <li >MySQL</li>
                            <li >MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}