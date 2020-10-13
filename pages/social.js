import Head from 'next/head'
import Link from 'next/link'
import Pixel from '../components/Pixel'


export default function Social() {
return(<>
<Head>
    <meta property="og:title" content="D'Raiz: social media landing page" />
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
    <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"/>
    
    </Head>
    {/* <Pixel name='FACEBOOK_PIXEL_1' /> */}


<main>
    <img id="socialLandingLogo" alt="d´Raiz Logo Main" src="./assets/logoAndVar/fontfaceExt-blk.png" />

    <div className="soMeLandingIntro"> Sé parte de un presente </div>
        <div className="SomeLandingDeco1" > </div>
        <div className="SomeLandingDeco2" > </div>
    <div className="soMeLandingIntro2"> sustentable </div>
        <div className="SomeLandingDeco2" > </div>
        <div className="SomeLandingDeco1" > </div>

    <div className="SoMeLandingBtn" >
    <a href="https://wa.me/593998752496" target="_blank" rel="noopener noreferrer"> 
    Catálogo por WhatsApp </a>
    </div>
    <div className="SoMeLandingBtn" >
    <a href="https://www.facebook.com/DRaizHuertos" target="_blank" rel="noopener noreferrer"> 
    Encuéntranos en Facebook </a>
    </div>
    <div className="SoMeLandingBtn" >
    <a href="https://www.instagram.com/draizhuertos" target="_blank" rel="noopener noreferrer"> 
    Encuéntranos en Instagram </a>
    </div>
    <div className="SoMeLandingBtn" >
    <a href="mailto:draiz.info@gmail.com" > Escríbenos un e-mail </a>
    </div>

    <img id="leafDetail" alt="d´Raiz leaf Detail" src="./assets/logoAndVar/icon-lightGrn.png" />
</main>

<style jsx>{`

    *{
        font-family: 'Poiret One', Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a{
        text-decoration: none;
        color: black;
    }

    #socialLandingLogo{
        max-width: 28%;
        margin-left: 36%;
        margin-top: 45px
    }

    .SomeLandingDeco1{
        margin-top: 2px;
        margin-bottom: 2px;
        height: 1px;
        width: 60%;
        margin-left: 20%;
        background-color: rgb(153,153,51);
    }    
    .SomeLandingDeco2{
        margin-top: 2px;
        margin-bottom: 2px;
        height: 2px;
        width: 60%;
        margin-left: 20%;
        background-color: rgb(153,153,51);
    }

    .soMeLandingIntro{
        font-size: 2em;
        text-align: center;
        margin-bottom: 12px;
    }

    .soMeLandingIntro2{
        font-size: 2.5em;
        text-align: center;
        text-transform: uppercase;
    }

    .soMeLandingIntro2::before{
        text-transform: lowercase;
        font-size: 0.7em;
        content: "más";
        display: block;
    }

    #leafDetail{
        width: 30%;
        margin-left: 35%;

    }          

    .SoMeLandingBtn{
        font-size: 1.3em;
        font-weight: 600;
        margin: 12px 10%;
        border-left: solid 1px rgb(153,153,51);
        border-bottom: solid 1px rgb(153,153,51);
        border-right: solid 1px rgba(153,153,51,0);
        border-top: solid 1px rgba(153,153,51,0);
        border-bottom: solid 1px rgb(153,153,51);
        padding: 9px;
        transition: all ease-in 0.5s;

    }

    .SoMeLandingBtn:hover{
        border-right: solid 1px rgba(153,153,51,1);
        border-top: solid 1px rgba(153,153,51,1);
        cursor: pointer;
        transition: all ease-in 0.5s;
        background-color: rgba(132, 226, 8, 0.493);
    } 


@media screen and (max-width: 600px){

    #socialLandingLogo{
        max-width: 70%;
        margin-left: 17%;
        margin-top: 10%;
        }

    .soMeLandingIntro{
        font-size: 1.3em;
        margin-bottom: 12px;
    }
    .soMeLandingIntro2{
        font-size: 1.7em;
    }
    .soMeLandingIntro2::before{
        font-size: 0.7em;
        }

    .SomeLandingDeco1{
        width: 80%;
        margin-left: 10%;
    }    
    .SomeLandingDeco2{
        width: 80%;
        margin-left: 10%;
    }

    #leafDetail{
        width: 60%;
        margin-left: 15%;
        position:fixed;
        bottom: 0;
    }    
}

    `}</style>
    </>)
}
