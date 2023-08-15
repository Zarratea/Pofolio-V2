import Typewriter from 'typewriter-effect';
import styles from './Header.module.css'
import NavContacto from "../NavContacto/Navcontacto";
import Lottie from '../Lottie/lottie';
import useWindowDimensions from '../Hook/hooks';



export default function Header() {
    const messages=['Mi nombre es Felipe 👋' , 'Soy Full Stack Developer !!']
    const { width } = useWindowDimensions();
    return(
        <>
            { width < 860 && (<div className={styles.divlottie}>
            <Lottie animation={'header'} idcontainer={'containerHeader'}/>
            </div>)}
        <div  className={styles.div}>
            <div className={styles.div2}>
                <h1 className={styles.h1Hola}>Hola!</h1>
                {width > 860 &&(<h1 className={styles.h1}><Typewriter options={{
                    strings: messages,
                    autoStart: true,
                    delay: 80,
                    loop: true,
                }} /></h1>)}
                {width < 860 &&(<h1 className={styles.h1}>'Mi nombre es Felipe 👋'</h1>)}
                <p className={styles.p}>Desarrollador Full stack, apasionado por crear composiciones que sean estéticas y prácticas, destinado a todo tipo de público. Vivo en Argentina y perfeccioné mis habilidades informáticas en 'SoyHenry'.</p>
                <NavContacto/>
            </div>
           { width > 860 && (<div className={styles.Lottie}>
                <Lottie animation={'header'} idcontainer={'containerHeader'}/>
            </div>)}
        </div>
        </>
    )
}
