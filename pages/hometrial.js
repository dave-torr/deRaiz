import Head from 'next/head'
import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

//Prodcut Info
let tradOne={
    "type": "Tradicional en Tierra",
    "name": "Mini-Huerto Piramidal",
    "price": 15,
    "details": [
        "3 plantitas (especies variadas)",
        "Diseño simple y elegante",
        "Ideal para mesón",
        "Disponible en varios colores"
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let tradOneImg = "./assets/productImgs/piramidSmall.png"

let tradTwo={
    "type": "Tradicional en Tierra",
    "name": "Mini-Huerto Piramidal Grande",
    "price": 25,
    "details": [
        "6 plantitas de la misma especie",
        "Diseño simple y elegante",
        "Ideal para mesón",
        "Disponible en varios colores"
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let tradTwoImg = "./assets/productImgs/piramidLarge.png"

let tradThree={
    "type": "Tradicional en tierra",
    "name": "Mini-Huerto Colgante",
    "price": 18,
    "details": [
        "3 plantitas (pueden ser especies variadas)",
        "Sistema modular colgante",
        "Disponible en varios colores"
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let tradThreeImg = "./assets/productImgs/hangingOne.png"

let hydroOne={
    "type": "Hydrophonic",
    "name": "Huerto Tubular",
    "price": 35,
    "color": ["blanco", "madera", "negro" ],
    "details": [
        "Sistema estacionario de mecha", 
        "4 plantitas de la misma especie",
        "Nutrientes y agua sin cloro",
        "Sistema modular",
        "Diseño colgante o para mesón",
        ],
    "measurements": "40cm x 20cm x 20cm",    
}
let hydroOneImg = "./assets/productImgs/tubular1.png"

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
let hydroTwoImg = "./assets/productImgs/squaredOne.png"

let kiddiOne={
    "type": "Huerto Infantil",
    "name": "Mi Primer Huerto",
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
    "name": "Mi Primer Huerto",
    "price": 18,
    "details": [
        "5 plantitas", 
        "Pinturas y Pincel", 
        "Tierra abonada lista",
        "video instructivo de siembra",
        ],
    "measurements": "45cm x 25cm",    
}
let kiddiOneImg = "./assets/productImgs/kiddiOne.png"



let prlxImg1="./assets/fillerImgs/farmVeggieCloseupOne.jpg"


export default function HomeOne(){

    const ProdDisplayer =(eachProduct, prodImg)=>{
    let eachProdFeatures = eachProduct.details.map((eachItem, i)=>
        <li style={{fontSize: "1.2em", marginTop:"10px", width:"100%" }} key={i}> {eachItem} </li>
        );
    return(<>
        <div className="generalProdContainer" 
            id={eachProduct.name} > 
            <div className="prodImgCont" > 
            {prodImg&&
            <img src={prodImg} className="eachProdPic" />
            }
            </div>

            <div className="prodDetailCont" >  
                <h3 className="eachProdName" > {eachProduct.name} </h3>
                <div className="featureList" > {eachProdFeatures} </div>
                <div className="prodPrice" > {eachProduct.price} .- USD </div>
                <div className="eachProdCallToAction" 
                style={{fontSize:"1.5em", textAlign: "center", borderTop: "dashed 1px green", marginTop: "9px", paddingTop: "3px" }} > Me interesa!  
                </div>
                <div style={{display:"flex", justifyContent:"center", textAlign:"center", marginTop:"6px"}}>
                    <div className="CTA1"> <a href="https://wa.me/593998752496" target="_blank" rel="noopener noreferrer">
                        Pedir por <br></br>WhatsApp </a></div>
                    <div className="CTA2" > <a href="mailto:draiz.info@gmail.com" > 
                        Pedir por <br></br> Correo Electronico </a></div>
                </div>
            </div>
        </div>
    <style jsx> {`
    a{
        text-decoration: none;
        color: unset;
    }

    .generalProdContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        min-width: 95vw;
        padding-bottom: 6px;
        margin-bottom: 21px;
        border-left: solid 1px grey;
        border-right: solid 1px grey;
        border-bottom: solid 1px grey;
    }
    
    .prodImgCont{
        display: flex;
        align-items: center;
    }

    .eachProdPic{
        width: 40vw;
        margin-top: 30px;
    }
    .prodDetailCont{
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    .eachProdName{
        margin: 18px;
        font-size: 1.8em;
        letter-spacing: 1px;
    }

    .prodPrice{
        font-size: 2.5em;
        text-align: center;
        margin-top: 21px;
    }

    .featureList{
        margin: unset;
        padding: unset;
        padding-left: 12px;
    }

    .CTA1{
        background-color: rgb(51, 102, 51);
        color: white;
        padding: 3px 21px
    }
    .CTA2{
        background-color: rgb(204, 204, 102);
        color: black;
        font-weight: 800;
        padding: 3px 21px
    }

    @media screen and (max-width: 600px){
        .generalProdContainer{
            flex-direction: column;
            align-items: center;

        }
        .eachProdPic{
            width: 70vw;
            margin: 12px;

        }
    }

    `}</style> 
        </>)
    }

    const homeHead=()=>{
        return(<> 
        <Head>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-166263603-2"
        />

        <script
            dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-166263603-2');
                `,
            }}
        />

            <title>De Raiz - Huertos</title>
            <meta property="og:title" content="D´Raiz - Huetos" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"/>
        </Head>
        <Pixel name='FACEBOOK_PIXEL_1' />
        </>)
    }

    return(<>
    {homeHead()}

<GeneralLayout>
  <main className="homeMain">

    <div className="homeLogoGenContainer" >
        <div>
            <img className="homeFontFace-one" alt="logo font face green" src="./assets/logoAndVar/fontface-lghtGrn.png" />
            <h1 className="homeTitle"> HUERTOS</h1>
            <img className="homeIcon-one" alt="icon green" src="./assets/logoAndVar/icon-lightGrn.png" />
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
        Agricultura a pequeña escala: simplificada </h2>
    <div>
        <h3 style={{marginLeft: "12%", marginRight: "30px", marginTop: "15px", }}> 
            D´Raiz te trae sistemas para crecer tus propios vegetales en casa, sin la necesidad de tener ningún conocimiento de agricultura. <br></br> Comidas más nutritivas, variadas y frescas todos los días.</h3>
        <h3 style={{ marginLeft: "12%", marginRight: "30px", marginTop: "15px", }}> 
            Elegantes y prácticos sistemas <i> hidropónicos </i>  o a <i>  base de tierra.</i>  Encuentra el lugar ideal y ¡listo! en poco tiempo podrás disfrutar de deliciosos sabores criados en casa. </h3>
    </div> 

    <div className="homeProductAnchors" >
        <h3 style={{textAlign:"center", fontSize: "1.5em" }}> 
        Explora nuestras opciones de:
        </h3>
    </div>
        <div className="anchorContainer" style={{textAlign:"center", display: "flex", justifyContent:"center", }}>
            <div className="anchor" onClick={()=>{
                let AnchorHidro = document.getElementById("hidroAnchor");
                AnchorHidro.scrollIntoView({behavior: "smooth"});
            }}> Huertos <br></br> Hidroponicos 
                <div className="anchorDeco" > </div>
                </div>
            <div className="anchor" onClick={()=>{
                let AnchorTerra = document.getElementById("terraAnchor");
                AnchorTerra.scrollIntoView({behavior: "smooth"});
            }}> Huertos <br></br> En Tierra  
                <div className="anchorDeco" > </div>
                </div>
            <div className="anchor"onClick={()=>{
                let AnchorTerra = document.getElementById("kiddiAnchor");
                AnchorTerra.scrollIntoView({behavior: "smooth"});
            }}>Huertos <br></br> Infantiles 
                <div className="anchorDeco" > </div>
                </div>
        </div>

    <div className="homeParallax" style={{
        backgroundImage:`url(${prlxImg1})`,
        width: "100%",
        transform: `translate(0px, 0px)`,
        minHeight: "180px",
        backgroundSize: "100% auto",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center"
         }}>
        </div>           

    <div className="productBar" > 
        <h2 className="prodBarTitle" id="hidroAnchor" > Huertos Hidroponicos: </h2>
        <div  style={{display: "flex", overflowX: "scroll",} }  >
        {ProdDisplayer(hydroOne, hydroOneImg)};
        {ProdDisplayer(hydroTwo, hydroTwoImg)};
        </div>
        <p style={{textAlign: "center", fontSize: "1.3em"}} >
        <i>&#8640; desplaza para más opciones: &#8640;</i> </p>
    </div>
    <div className="productBar" > 
        <h2 className="prodBarTitle" id="terraAnchor" > Huertos en Tierra: </h2>
        <div  style={{display: "flex", overflowX: "scroll",} }  >
        {ProdDisplayer(tradOne, tradOneImg)};
        {ProdDisplayer(tradTwo, tradTwoImg)};
        {ProdDisplayer(tradThree, tradThreeImg)};
        </div>
        <p style={{textAlign: "center", fontSize: "1.3em"}} >
        <i>&#8640; desplaza para más opciones: &#8640;</i> </p>
    </div>
    <div className="productBar" > 
        <h2 className="prodBarTitle" id="kiddiAnchor"> Huertos Infantiles: </h2>
        <div   >
        {ProdDisplayer(kiddiOne, kiddiOneImg)};
        </div>
        {/* <p style={{textAlign: "center", fontSize: "1.3em"}} >
        <i>&#8640; desplaza para más opciones:: &#8640;</i> </p> */}
    </div>
  </main>




</GeneralLayout>

    <style jsx> {`

    *{
        margin: unset;
        font-family: 'Poiret One', cursive;
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
        height: 150px;
    }

    .homeFontFace-one{
        margin: 6px 12px;
        width: 200px;
    }

    .homeTextOne{
        margin: 60px 18px 40px 18px;
        text-align: center;
        font-size: 1.5em;
    }
    .homeIcon-one{
        margin: 6px 12px;
        width: 160px;
    }

    .handOffHome{
        width: 100%;
    }

    .homeProductAnchors{
        margin-top: 21px;
        padding-top: 21px;
        border-top: solid 1px rgba(102, 102, 102, 1);
        padding-bottom: 21px;
    }

    .anchorContainer{
        border-bottom: solid 2px green;

    }

    .anchor{
        align-items: center;
        font-size: 2em;
        margin: 10px 33px;
    }
    .anchor:hover{
        cursor: pointer;
        font-weight: 600;
    }
    .anchor:hover > .anchorDeco{
        cursor: pointer;
        width: 100px;
        background-color: red;
        transition: all ease-in 0.5s;
    }


    .anchorDeco{
        transition: all ease-in 1s;
        height: 2px;
        width: 12px;
        background-color: red;
    }

    .productBar{
        border-bottom: solid 1px rgba(51, 102, 51, 0.8);
    }

    .prodBarTitle{
        margin-top: 25px;
        padding-bottom: 9px;
        font-weight: 400;
        font-size: 2em;
        border-bottom: dotted 2px grey;
    }

@media screen and (max-width: 600px){

    .homeLogoGenContainer{
        margin-top: 15%;
    }
    .homeFontFace-one{
        width: 180px;
    }
    .homeTextOne{
        margin: 40px 18px 35px 18px;
        text-align: center;
        font-size: 1.5em;
    }

    .anchor{
        margin: 10px 15px;
        font-size: 1.3em;
        }

    .prodBarTitle{
        font-size: 1.8em;
        
    }

}


    `}</style> 
    </>)
}