import Head from 'next/head'
import Link from 'next/link'


//LANDING ONE
export default function Home() {
  return (
    <div className="landingPageGeneral">
      <Head>
        <title>De Raiz Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <div className="LandingPageOne" >
          <div className="introOne">
            <img id="vineLeftHome1" src="./assets/plant-left.png" />
            <div>
            <img 
              id="deRaizFontFace" 
                src="./assets/logo/fontface-blk.png" />
            <h1 className="title introTitle">
                HUERTOS<br></br> URBANOS 
                </h1>
                </div>
                </div>
          <img 
            id="iconLandingOne" 
            src="./assets/logo/icon-lightGrn.png" />
          <img 
            id="iconRotateLandingOne" 
            src="./assets/logo/rotationDeco-blk.png" />
        </div>
        <div className="landingOneCont container1">
          <img 
            id="vineyard" 
            src="./assets/horizontalPlantCover.png" />
          <div className="introTextCont" >
              <h1 className="title introTitle2">
                  SE PARTE<br></br> DE UN PRESENTE  
                  </h1>
              <h1 className="title2">
                  SUSTENTABLE  
                  </h1>
              <p className="introText">
                  Crece tu propia comida <br></br> 
                  fácil y rápidamente 
                  <br></br>en casa
                  <br></br>
                  </p>
          </div>
        </div>
        <div className="landingOneCont container2">
          <div className="imagePlaceholder" >
            imagen del huerto
          </div>
          <h2 className="PackageDetails" >
            Huerto Colgante 
            <br></br>
            Hidroponico 
          </h2>
          <h2 className="packagePrice" >
            muy pronto
          </h2>
          <div className="packageBenefitList" >
            <li> ¿Más fresco? Imposible </li>
            <li> Solo requiere de una conneccion elctrica </li>
            <li> Empieza a cosechar en 3 semanas o menos! </li>
            <li> Amplias variedades y sabores para elegir </li>
            <li> Variedades unicas del Ecuador</li>
          </div>
        </div>
                  <br></br>
          <br></br>
        {/* <div className="landingOneCont container3">
          <div className="QandAIntro" >  
          
          <div className="" > 
            <div className="QandATwo" > 
            Varias preguntas y respuestas del producto
            </div>

                      <br></br>
          <br></br>
            <div className="QandATwo" > 
            Oferta incial del producto
            </div>
          </div>
          </div>

        </div> */}
      
      </main>
      <footer>
        <div className="footerContainer" > 
          <br></br>
          <br></br>
          D´Raiz
          <br></br>
           Huertos Urbanos
          <br></br>
          <br></br>
          Quito Ecuador
          <br></br>
          {`{waira.nuna}`} 
          <br></br>
          2020 
          <br></br>
          &copy;  
        </div>
      <div className="decoDivCont" >
        <div className="decoDiv deco1" ></div>
        <div className="decoDiv deco2" ></div>
        <div className="decoDiv deco3" ></div>
      </div>
      </footer>
      <style jsx>{`
        .landingPageGeneral {
          width: 100%
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .LandingPageOne {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .introOne{
          display: flex;
        }

        #vineLeftHome1{
          height:150px;
        }

        #deRaizFontFace{
          height:50px;
          margin-left: 12px;
        }

        #iconLandingOne{
          width: 150px;
          position: absolute;
          bottom: -25px;
        }
        #iconRotateLandingOne{
          margin-left: 4px;
          width: 210px;
          position: absolute;
          bottom: -50px;
        }

        @media (prefers-reduced-motion: no-preference) {
          #iconRotateLandingOne {
            animation: App-icon-spin infinite 18s linear;
            animation-direction: normal; /* or: normal */
          }

        }  
        @keyframes App-icon-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }



        h1{
          font-weight: 200;
          letter-spacing: 3px;
          margin: unset;
        }

        .introTitle{
          margin-top: 9px;
          margin-left: 21px;
        }

        .landingOneCont{
          display: flex;
          flex-direction: column;
          height: fit-content;
        }

        .container1{
          box-shadow: -6px 6px 5px rgba(54, 54, 54, 0.609)

        }

        #vineyard{
          width: 100%;
          margin-top: 75px;
        }

        .introTitle2{
          padding-bottom: 21px;
          padding-left: 21px;
          border-bottom: solid 1px rgb(51, 102, 51);
          margin-bottom: 3px;
        }

        .title2::before{
          font-family: 'Playfair Display', serif;
          content: "más";
          display: block;
          font-size: 0.7em;
        }
        .title2{
          border-top: solid 2px rgb(102, 153, 51);
          margin-top: 3px;
          padding-top: 15px;
          font-size: 2.7em;
          TEXT-ALIGN: CENTER;
          font-family: 'Playfair Display', serif;
          padding-bottom: 15px;
          border-bottom: solid 2px rgb(102, 153, 51);
        }

        .introTextCont{
          width:70%;
          margin-left: 15%;
        }

        .introText{
          border-top: solid 1px rgb(51, 102, 51);
          margin-top: 2px;
          padding-top: 45px;
          font-size: 2em;
          text-align: end;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          padding-right: 21px;
          padding-bottom: 21px;
        }

        .container2{
          width:70%;
          margin-left: 15%;
        }
        .imagePlaceholder{
          margin-top: 30px;
          margin-left: 15%;
          width: 70%;
          height: 200px;
          background-color: teal;
          color: whitesmoke;
          text-align: center;
          padding-top: 65px;
        }

        .PackageDetails{
          font-weight: 300;
          letter-spacing: 3px;
          font-size: 1.7em;
          padding-left: 33px;
          text-transform: uppercase;
          border-left: 21px solid #eaeaea;
        }

        .packagePrice{
          font-size: 1.2em;
          border-bottom: 2px solid #eaeaea;
          font-weight: 400;
          letter-spacing: 3px;
          margin: unset;
          text-align:center;
          padding-bottom: 21px;
          margin-bottom: 21px;

        }
        .packageBenefitList{
          margin: 12px 30px;
          padding-bottom: 41px;
          font-size: 1.2em;
          font-family: 'Playfair Display', serif;
        }

        .QandASection{
          display:flex;
          flex-direction:rwo;
          margin-bottom: 21px;
        }

        .QandAOne{
          font-size: 3em;
          text-transform: uppercase;
          font-family: 'Playfair Display', serif;
          text-align: center;
          color: whitesmoke;
          width:50%;
          height:400px;
          background-color: rgb(102, 153, 51);
        }


        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .decoDivCont{
          width: 100%;
          margin-top: 3px;
        }

        .decoDiv{
          margin-top: 1px;
          width: 100%;
          height: 2px;
        }
        .deco1{
                background-color: rgb(179, 132, 3);
        }
        .deco2{
                background-color: rgb(95, 95, 99);
        }
        .deco3{
                background-color: rgb(181, 21, 0);
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }


        @media (max-width: 700px) {
          .introTextCont{
            width:100%;
            margin-left: 0%;
          }

        .container2{
            width:100%;
            margin-left: 0%;
          }
       
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
