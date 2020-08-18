import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'


//Product Info
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

let closingImg= "./assets/fillerImgs/horizontalPlantCover.png"

export default function Home(){

    const ProdDisplayer =(eachProduct, prodImg)=>{
    let eachProdFeatures = eachProduct.details.map((eachItem, i)=>
        <li style={{fontSize: "1.2em", marginTop:"10px", width:"100%" }} key={i}> {eachItem} </li>
        );
    return(<>
        <div className={styles.generalProdContainer} 
            id={eachProduct.name} > 
            <div className={styles.prodImgCont} > 
            {prodImg&&
            <img src={prodImg} className={styles.eachProdPic} />
            }
            </div>

            <div className={styles.prodDetailCont} >  
                <h3 className={styles.eachProdName} > {eachProduct.name} </h3>
                <div className={styles.featureList} > {eachProdFeatures} </div>
                <div className={styles.prodPrice} > {eachProduct.price} .- USD </div>
                <div className={styles.eachProdCallToAction} 
                style={{fontSize:"1.5em", textAlign: "center", borderTop: "dashed 1px green", marginTop: "9px", paddingTop: "3px" }} > Me interesa!  
                </div>
                <div style={{display:"flex", justifyContent:"center", textAlign:"center", marginTop:"6px"}}>
                    <div className={styles.CTA1}> <a href="https://wa.me/593998752496" target="_blank" rel="noopener noreferrer">
                        Pedir por <br></br>WhatsApp </a></div>
                    <div className={styles.CTA2} > <a href="mailto:draiz.info@gmail.com" > 
                        Pedir por <br></br> Correo Electronico </a></div>
                </div>
            </div>
        </div>

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

            <title>De Raíz - Huertos</title>
            <meta property="og:title" content="D´Raíz - Huetos" />
            <link rel="icon" href="/favicon.ico" />

        </Head>
        <Pixel name='FACEBOOK_PIXEL_1' />
        </>)
    }

    return(<>
    {homeHead()}

<GeneralLayout>
  <main className="homeMain">

    <div className={styles.homeLogoGenContainer} >
        <div>
            <img className={styles.homeFontFaceOne} alt="logo font face green" src="./assets/logoAndVar/fontface-lghtGrn.png" />
            <h1 className={styles.homeTitle}> HUERTOS</h1>
            <img className={styles.homeIconOne} alt="icon green" src="./assets/logoAndVar/icon-lightGrn.png" />
        </div>
    </div>

    <div className={styles.homeTextOne} > 
        <p style={{fontSize: "1.2em"}}> Tu alimentación más sana, fresca y cerca de ti </p>
        <p style={{fontSize: "1.5em"}}> Finalmente huertos en casa </p>
        <p style={{fontSize: "1.5em"}}> ¡diseñados para ti! </p>
        <p style={{fontSize: "1.5em"}}> - </p>
    </div>

    <img className={styles.handOffHome} alt="Handing plants off" src="./assets/fillerImgs/handoffOne.png" />

    <h2 style={{ marginLeft: "9%", marginTop: "45px", fontSize:"2.5em", fontWeight: "200" }}> 
        Agricultura a pequeña escala: simplificada </h2>
    <div>
        <h3 style={{marginLeft: "12%", marginRight: "30px", marginTop: "15px", fontWeight: "400" }}> 
            D´Raíz te trae sistemas para crecer tus propios vegetales en casa, sin la necesidad de tener ningún conocimiento de agricultura. <br></br> Comidas más nutritivas, variadas y frescas todos los días.</h3>
        <h3 style={{ marginLeft: "12%", marginRight: "30px", marginTop: "15px", fontWeight: "200"}}> 
            Elegantes y prácticos sistemas <i> hidropónicos </i>  o a <i>  base de tierra.</i>  Encuentra el lugar ideal y ¡listo! en poco tiempo podrás disfrutar de deliciosos sabores criados en casa. </h3>
    </div> 

    <div className={styles.homeProductAnchors} >
        <h3 style={{textAlign:"center", fontSize: "1.5em" }}> 
        Explora nuestras opciones de:
        </h3>
    </div>
        <div className={styles.anchorContainer} style={{textAlign:"center", display: "flex", justifyContent:"center", }}>
            <div className={styles.anchor} onClick={()=>{
                let AnchorHidro = document.getElementById("hidroAnchor");
                AnchorHidro.scrollIntoView({behavior: "smooth"});
            }}> Huertos <br></br> Hidroponicos 
                <div className={styles.anchorDeco} > </div>
                </div>
            <div className={styles.anchor} onClick={()=>{
                let AnchorTerra = document.getElementById("terraAnchor");
                AnchorTerra.scrollIntoView({behavior: "smooth"});
            }}> Huertos <br></br> En Tierra  
                <div className={styles.anchorDeco} > </div>
                </div>
            <div className={styles.anchor} onClick={()=>{
                let AnchorTerra = document.getElementById("kiddiAnchor");
                AnchorTerra.scrollIntoView({behavior: "smooth"});
            }}>Huertos <br></br> Infantiles 
                <div className={styles.anchorDeco} > </div>
                </div>
        </div>

    <div className={styles.homeParallax} style={{
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

    <div className={styles.productBar} > 
        <h2 className={styles.prodBarTitle} id="hidroAnchor" > Huertos Hidroponicos: </h2>
        <div  style={{display: "flex", overflowX: "scroll",} }  >
        {ProdDisplayer(hydroOne, hydroOneImg)};
        {ProdDisplayer(hydroTwo, hydroTwoImg)};
        </div>
        <p style={{textAlign: "center", fontSize: "1.3em"}} >
        <i>&#8640; desplaza para más opciones: &#8640;</i> </p>
    </div>
    <div className={styles.productBar} > 
        <h2 className={styles.prodBarTitle} id="terraAnchor" > Huertos en Tierra: </h2>
        <div  style={{display: "flex", overflowX: "scroll",} }  >
        {ProdDisplayer(tradOne, tradOneImg)};
        {ProdDisplayer(tradTwo, tradTwoImg)};
        {ProdDisplayer(tradThree, tradThreeImg)};
        </div>
        <p style={{textAlign: "center", fontSize: "1.3em"}} >
        <i>&#8640; desplaza para más opciones: &#8640;</i> </p>
    </div>
    <div className={styles.productBar} > 
        <h2 className={styles.prodBarTitle} id="kiddiAnchor"> Huertos Infantiles: </h2>
        <div   >
        {ProdDisplayer(kiddiOne, kiddiOneImg)};
        </div>
        {/* <p style={{textAlign: "center", fontSize: "1.3em"}} >
        <i>&#8640; desplaza para más opciones:: &#8640;</i> </p> */}
    </div>

    <div className={styles.closingDiv} >
      <img src={closingImg} style={{ width:"100%"}} />

      <p style={{fontSize: "2em", borderBottom: "solid 2px crimson", paddingBottom: "5px"}} > Sé parte de un presente </p>
      <p style={{fontSize: "3em", borderTop: "solid 1px lime", marginTop: "5px" }} > más </p>
      <p style={{fontSize: "3em", borderBottom: "solid 1px lime", textTransform: "uppercase", marginBottom: "5px" }} > sustentable </p>

     </div>
  </main>
</GeneralLayout>


    </>)
}