import Head from 'next/head'
import {GeneralLayout} from "../components/generalLayout.js"

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

<GeneralLayout>
  <main className="homeMain">



  </main>
</GeneralLayout>

    </>)
}