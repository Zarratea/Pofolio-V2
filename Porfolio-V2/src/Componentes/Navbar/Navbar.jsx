import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css'
import useWindowDimensions from '../Hook/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
        const [activeSection, setActiveSection] = useState('home'); 
        const { width } = useWindowDimensions();
        const [menuOpen, setMenuOpen] = useState(false);

        const handelScroll = (e, sectionId) => {
          e.preventDefault();

          const target = document.getElementById(sectionId);
          let headerOffset=80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition - headerOffset;
      
          window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
          });
          setMenuOpen(false)

        };

        useEffect(() => {
            const handleNavHighlight = () => {
              const sections = ['home', 'about', 'projectos', 'contacto'];
              let currentActive = 'home';
              sections.forEach((section) => {
                const rect = document.getElementById(section).getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 0) {
                  currentActive = section;
                }
              });
              setActiveSection(currentActive);
            };  
            window.addEventListener('scroll', handleNavHighlight);
            return () => window.removeEventListener('scroll', handleNavHighlight);
          }, []);

        const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };

    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbar3}>
                <a className={styles.link} href="#home" onClick={(e) => handelScroll(e, "home")}>
                    <h2 className={styles.h3}>{`< Felipe Zarratea! />`}</h2></a>
                </div>
                {width < 860 &&(
                  <div className={styles.menuButton} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className={styles.buttonMenu}/>
                  </div>
                )}
                {menuOpen && width < 860 && (
                    <div className={styles.divMenu}>
                      <a className={styles.link} href="#home" onClick={(e) => handelScroll(e, "home")}>
                        <h2 className={styles.h2Menu} style={activeSection === 'home' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}} >Inicio</h2></a>

                      <a className={styles.link} href="#about" onClick={(e) => handelScroll(e, "about")}>
                        <h2 className={styles.h2Menu} style={activeSection === 'about' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}}>Acerca de mí</h2></a>

                      <a className={styles.link} href="#projectos" onClick={(e) => handelScroll(e, "projectos")}>
                        <h2 className={styles.h2Menu} style={activeSection === 'projectos' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}} >Proyectos</h2></a>

                      <a className={styles.link} href="#contacto" onClick={(e) => handelScroll(e, "contacto")}>
                        <h2 className={styles.h2Menu} style={activeSection === 'contacto' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}} >Contacto</h2></a>
                    </div>
                  )}
                {width > 860 && (<div className={styles.navbar2}>
                    <a className={styles.link} href="#home" onClick={(e) => handelScroll(e, "home")}>
                        <h2 className={styles.h2} style={activeSection === 'home' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}} >Inicio</h2></a>
                    <a className={styles.link} href="#about" onClick={(e) => handelScroll(e, "about")}>
                        <h2 className={styles.h2} style={activeSection === 'about' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}}>Acerca de mí</h2></a>
                    <a className={styles.link} href="#projectos" onClick={(e) => handelScroll(e, "projectos")}>
                        <h2 className={styles.h2} style={activeSection === 'projectos' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}} >Proyectos</h2></a>
                    <a className={styles.link} href="#contacto" onClick={(e) => handelScroll(e, "contacto")}>
                        <h2 className={styles.h2} style={activeSection === 'contacto' ? { color: 'rgba(53, 100, 231, 0.837)' } : {}} >Contacto</h2></a>
                </div>)}
            </nav>
        </>

    )
}