import Navbar from "../Navbar/Navbar";
import React from "react";
import styles from './home.module.css'
import Header from "../Header/Header";
import Cards from "../Cards/cards";
import About from "../AboutMe/about";
import Contacto from "../Contacto/contacto";


export default function Home() {
    return(
        <>  
            <Navbar/>
            <header className={styles.divHome} id='home'>
                <Header/>
            </header>
            <section className={styles.divAbout} id='about'>
                <About/>
            </section>
            <section className={styles.divCards} id='projectos'>
                <Cards/>
            </section>
            <section className={styles.divContacto} id='contacto'>
                <Contacto/>
            </section>
            <footer className={styles.footer}>© 2023 by Felipe Zarratea</footer>
                
                
        </>
    )
}