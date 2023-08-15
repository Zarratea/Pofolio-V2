import redux from '../src/imagenes/redux-logo-24.png'
import react from '../src/imagenes/react-logo-24.png'
import postgre from '../src/imagenes/postgre.png'
import expres from '../src/imagenes/Express.png'
import node from '../src/imagenes/node.png'
import css from '../src/imagenes/css.png'
import TukiMarket from '../src/imagenes/TukiMarket.png'
import CocinaHenry from '../src/imagenes/CocinaHenry.png'
import Porfolio from '../src/imagenes/Porfolio_V2.png'


const projects=[
    {
        name:'TukiMarket',
        desc:'Ven a comprar de forma segura y agil , en este Marketplace tendras la oportunidad de publicar tus productos y comprar desdel mismo perfil. Ademas no tener que preocuparte por envios , solo de una buen atencion 😊.',
        link:'https://tukimarket.netlify.app',
        gitHub:'https://github.com/Zarratea/Proyecto-Final',
        active:true,
        image:TukiMarket,
        video:null,
        tec:[redux,react,postgre,expres,node,css],
        tecnname:['Redux,React,Postgre,Express.js,node.js,CSS']
    },
    {
        name:'CocinaHenry',
        desc:'Comienza hoy en CocinaHenry prueba recetas increibles y comparte tus recetas con el mundo. En esta pagina encontras miles de recetas de difentes tipos de dietas , con comentarios y puntos de salud.',
        link:null,
        gitHub:'https://github.com/Zarratea/Foods',
        active:true,
        image:CocinaHenry,
        video:null,
        tec:[redux,react,css],
        tecnname:['Redux,React,CSS']
    },
    {
        name:'Porfolio',
        desc:'Pagina de presentacion , aqui encontraras toda la informacion acerca de mi trayectoria y mi forma de contactarme 😊.',
        link:'https://pofolio-v2-production.up.railway.app/',
        gitHub:'https://github.com/Zarratea/Pofolio-V2',
        active:true,
        image:Porfolio,
        video:null,
        tec:[redux,react,css],
        tecnname:['Redux,React,CSS']
    }
]

export {projects};