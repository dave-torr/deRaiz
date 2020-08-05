import Head from 'next/head'
import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let tradOne={
    "type": "Tradicional en tierra",
    "name": "Mini-Huerto",
    "price": 15,
    "details": [
        "3 plantitas (pueden ser especies variadas)",
        "Diseño simple y elegante",
        "Ideal para mesón",
        "Disponible en varios colores"
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let tradTwo={
    "type": "Tradicional en tierra",
    "name": "Mini-Huerto",
    "price": 25,
    "details": [
        "6 plantitas de la misma especie",
        "Diseño simple y elegante",
        "Ideal para mesón",
        "Disponible en varios colores"
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let tradThree={
    "type": "Tradicional en tierra",
    "name": "Mini-Huerto",
    "price": 18,
    "details": [
        "3 plantitas (pueden ser especies variadas)",
        "Sistema modular colgante",
        "Disponible en varios colores"
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let hydroOne={
    "type": "Hydrophonic",
    "name": "Tubular",
    "price": 35,
    "details": [
        "Sistema estacionario de mecha", 
        "4 plantitas de la misma especie",
        "Nutrientes y agua sin cloro",
        "Sistema modular",
        "Sistema colgante o para mesón",
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let hydroTwo={
    "type": "Hydrophonic",
    "name": "Circulatorio",
    "price": 85,
    "details": [
        "Sistema recirculante NFT", 
        "7 plantitas", 
        "Hasta 3 especies distintas",
        "Nutrientes y agua sin cloro",
        "Sistema colgante, eficiente en espacio"
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let kiddiOne={
    "type": "Huerto Infantil",
    "name": "Mi primer huerto",
    "price": 15,
    "details": [
        "2 plantitas", 
        "Pinturas y Pincel", 
        "Tierra abonada lista",
        "video instructivo de siembra",
        ],
    "measurements": "20cm x 25cm",    
}
let kiddiTwo={
    "type": "Huerto Infantil",
    "name": "Mi primer huerto",
    "price": 18,
    "details": [
        "5 plantitas", 
        "Pinturas y Pincel", 
        "Tierra abonada lista",
        "video instructivo de siembra",
        ],
    "measurements": "45cm x 25cm",    
}

let prlxImg1="./assets/fillerImgs/farmVeggieCloseupOne.jpg"

export default function HomeOne(){

    return(<>
<Head>
    <title>De Raiz - Huertos</title>
    <meta property="og:title" content="D´Raiz - Huetos" />
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"/>
</Head>
<Pixel name='FACEBOOK_PIXEL_1' />

<GeneralLayout>
  <main className="homeMain">
    <div className="homeLogoGenContainer" >
        <div>
            <img className="HomeFontFace1" alt="logo font face green" src="./assets/logoAndVar/fontface-lghtGrn.png" />
            <h1 className="homeTitle"> HUERTOS</h1>
            <img className="HomeIcon1" alt="icon green" src="./assets/logoAndVar/icon-lightGrn.png" />
        </div>
    </div>

    <div className="homeTextOne" > 
        <p style={{fontSize: "1.2em"}}> Tu alimentación más sana, fresca y cerca de ti </p>
        <p style={{fontSize: "1.5em"}}> Finalmente huertos en casa </p>
        <p style={{fontSize: "1.5em"}}> ¡diseñados para ti! </p>
        <p style={{fontSize: "1.5em"}}> - </p>
    </div>

    <img className="handOffHome" alt="Handing plants off" src="./assets/fillerImgs/handoffOne.png" />

    <h2 style={{ marginLeft: "9%", marginTop: "45px" }}> 
        Agricultura a pequeña escala, simplificada </h2>
    <div>
        <h3 style={{marginLeft: "12%", marginRight: "30px", marginTop: "15px", }}> 
            D´Raiz te trae sistemas para crecer tus propios vegetales en casa, sin la necesidad de tener ningún conocimiento de agricultura. Comidas más nutritivas, variadas y frescas todos los días.</h3>
        <h3 style={{ marginLeft: "12%", marginRight: "30px", marginTop: "15px", }}> 
            Elige entre nuestros elegantes y practicos systemas <i>hidroponicos</i>, o a <i>base de tierra,</i> encuentra el lugar ideal donde ubicar tus plantitas y ¡listo! en poco tiempo podras disfrutar de deliciosos sabores criados en casa. </h3>
    </div> 
    <div className="HomeProductAnchors" >
        <h3 style={{textAlign:"center", fontSize: "1.5em",}}> 
        Explora nuestras opciones de:
        </h3>
        <div className="anchorContainer" >
            <p className="anAnchor"> Huertos <br></br> En Tierra 
                <div className="anchorDeco" > </div>
                </p>
            <p className="anAnchor"> Huertos <br></br> Hidroponicos 
                <div className="anchorDeco" > </div>
                </p>
            <p className="anAnchor"> Huertos <br></br> Infantiles 
                <div className="anchorDeco" > </div>
                </p>
        </div>
    </div>
    <div className="homeParallax" style={{
        backgroundImage:`url(${prlxImg1})`,
        width: "100%",
        transform: `translate(0px, 0px)`,
        minHeight: "150px",
        backgroundSize: "100% auto",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "bottom",
         }}>
        </div>           

  </main>
</GeneralLayout>

    <style jsx> {`
    h1, h2, h3, p {
        font-family: 'Poiret One', cursive;
        margin: unset;
    }

    .homeLogoGenContainer{
        margin-top: 3%;
        margin-bottom: 3%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .homeTitle{
        width: 180px;
        margin: 6px 12px;
        letter-spacing: 9px;
        
    }

    #vineLeftHome1{
        height:150px;
    }

    .HomeFontFace1{
        margin: 6px 12px;
        width: 200px;
    }

    .homeTextOne{
        margin: 60px 18px 40px 18px;
        text-align: center;
        font-size: 1.5em;
    }
    .HomeIcon1{
        margin: 6px 12px;
        width: 160px;
    }

    .handOffHome{
        width: 100%;
    }

    .HomeProductAnchors{
        margin-top: 21px;
        padding-top: 21px;
        border-top: solid 1px rgba(102, 102, 102, 1);
        border-bottom: solid 2px rgba(102, 153, 51, 1);
        padding-bottom: 21px;
    }

    .anchorContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

    }

    .anAnchor{
        align-items: center;
        font-size: 2em;
        margin: 10px 33px;
    }
    .anAnchor:hover{
        cursor: pointer;
    }
    .anAnchor:hover>.anchorDeco{
        cursor: pointer;
        width: 100px;
        background-color: red;
        transition: all ease-in 0.5s;
    }

    .anchorDeco{
        transition: all ease-in 1s;
        height:2px;
        width: 12px;
        background-color: red;
    }

@media screen and (max-width: 600px){

    .homeLogoGenContainer{
        margin-top: 15%;
    }
    .HomeFontFace1{
        width: 180px;
    }
    .homeTextOne{
        margin: 40px 18px 35px 18px;
        text-align: center;
        font-size: 1.5em;
    }

    .anchorContainer{
        flex-direction: column;
        align-items: start;
        padding-left: 33px;
    }
}


    `}
    </style> 
    </>)
}