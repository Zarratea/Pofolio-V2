import styles from './contacto.module.css'
import Lottie from '../Lottie/lottie';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';




export default function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8s51obx', 'template_hagzjah', form.current, '4Vxd331k4DwHSdqUW')
        .then((result) => {
            Swal.fire({
                title: 'Email enviado con exito!',
                text: '¡Gracias por contactarme , resiviras una pronta respuesta!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
              });
              form.current.reset();
            }, (error) => {
            Swal.fire({
                title: 'Error!',
                text: 'Intenta nuevamente!',
                icon: 'error',
                timer: 2000,
                showConfirmButton: false,
              });
        });
    };

    return(
        <>
        <div className={styles.div1}>
            <div className={styles.pLottie}>
                <h2 className={styles.h1} >Contacto</h2>
                <p className={styles.p}><b>¿Tienes un proyecto que quieras discutir? ¡No dudes en contactarme!</b></p>
                {/*<p className={styles.p}> Estoy disponible para proyectos freelance. Si tienes alguna pregunta o solicitud, no dudes en enviarme un correo electrónico.</p>
                <p className={styles.p}>¡Espero poder ayudarte con tu proyecto!</p>*/}
                <div className={styles.Lottie}>
                    <Lottie animation={'contac'} idcontainer={'containerContac'}/>
                </div>
            </div>
            <form id="contact-form" className={styles.form} ref={form} onSubmit={sendEmail}>
                    <input type="text" id="name" required placeholder="Nombre" className={styles.input} name="user_name"/>
                    <input type="email" id="email" name="user_email" required placeholder="Email" className={styles.input}/>
                    <input type="text" id="subject" name="subject" required placeholder="Asunto" className={styles.input}/>
                    <textarea name="message" id="message" cols="30" rows="8" placeholder="Mensaje"  className={styles.inputMensaje}></textarea>
                <button type="submit" className={styles.buttonSumit} value="Send">Enviar</button>
            </form>
        </div>
        
        </>
    )
}
