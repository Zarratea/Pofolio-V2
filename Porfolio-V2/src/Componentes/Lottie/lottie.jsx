import React, { useEffect, useMemo } from 'react';
import lottie from 'lottie-web';
import contac from '../../Lottie-JSON/About.json'
import about from '../../Lottie-JSON/Contac.json'
import header from '../../Lottie-JSON/Heder.json'

export default function Lottie({ animation, idcontainer }) {
    const animationDataMap = useMemo(() => ({
        header: header,
        about: about,
        contac: contac,
    }), []);

    useEffect(() => {
        const animationData = animationDataMap[animation];
        lottie.loadAnimation({
            container: document.getElementById(idcontainer),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        });
    }, [animation, idcontainer, animationDataMap]);

    return (
        <div id={idcontainer} style={{ width: 'auto', height: 'auto' }} ></div>
    );
}
