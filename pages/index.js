import Head from 'next/head'
import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'


//LANDING ONE
export default function Home() {
  return (
  <div className="landingPageGeneral">
    <Head>
      <title>De Raiz - Huertos</title>
      <meta property="og:title" content="D´Raiz - Huetos" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"/>
    </Head>

<Pixel name='FACEBOOK_PIXEL_1' />

<GeneralLayout>
  <main className="homeMain">

    <img id="homeGenLogo" alt="d´Raiz Logo Main" src="./assets/generalLogo1.png" />

    <div className="homeIntroText" > muy pronto <br></br> tus espacios verdes <br></br>más cerca de ti</div>

  </main>
</GeneralLayout>


<style jsx>{`
    .homeMain{
      min-height: 100vh;
    }

    #homeGenLogo{
      width: 40%;
      margin-left:30%; 
    }

    .homeIntroText{
      margin: 21px;
      text-align: center;
      font-size: 2em;
    }

  @media screen and (max-width: 600px){

    #homeGenLogo{
      width: 70%;
      margin-left:15%; 
    }
}  

  }`}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          font-family: 'Poiret One', cursive;
        }

      `}</style>
    </div>
  )
}
