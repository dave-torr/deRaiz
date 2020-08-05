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
        <img id="vineLeftHome1" src="./assets/fillerImgs/plant-left.png" />
        <div>
            <img className="HomeFontFace1" alt="logo font face green" src="./assets/LogoAndVar/fontface-lghtGrn.png" />
            <h1 className="homeTitle"> HUERTOS</h1>
        </div>
    </div>

    <div className="homeTextOne" > 
        <p> Tu alimentación más sana, fresca y cerca de ti </p>
        <p> Finalmente huertos en casa </p>
        <br></br>
        <p> ¡diseñados para ti! </p>
    </div>

    <img className="handOffHome" alt="Handing plants off" src="./assets/fillerImgs/handoffOne.png" />

    <div></div>

  </main>
</GeneralLayout>

    <style jsx> {`
    h1, p {
        font-family: 'Poiret One', cursive;
        margin: unset;
    }

    .homeLogoGenContainer{
        align-items: center;
        justify-content: center;
        margin-top: 3%;
        margin-bottom: 3%;
        display: flex;
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

    .handOffHome{
        width: 100%;
    }

@media screen and (max-width: 600px){

    .homeLogoGenContainer{
        margin-top: 15%;
    }
    .HomeFontFace1{
        width: 180px;
    }
}


    `}
    </style> 
    </>)
}