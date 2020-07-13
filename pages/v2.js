import Head from 'next/head'

import {GeneralLayout} from "../components/generalLayout.js"


export default function Page2 (){
return(<>
    <div className="landingPageGeneral2">
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&family=Nunito:wght@300;400;600&family=Source+Sans+Pro:wght@200;300;400;600&display=swap" rel="stylesheet"></link>
    </Head>
    <GeneralLayout>
        <div className="page2Main">
            <div className="logoTrials">
            <img 
                id="GeneralIcon" 
                src="./assets/logo/icon-wheel.png" />
            <div className="fontLogo" ><img 
                    id="fontFaceTrial2" 
                    src="./assets/logo/fontface-blk.png" />
                <h2 className="fontTitle title1" > Huertos <br></br> Urbanos</h2>    
                </div>
            </div>

            <div className="logoTrials">
            <img 
                id="GeneralIcon" 
                src="./assets/logo/icon-wheel.png" />
            <div className="fontLogo" ><img 
                    id="fontFaceTrial2" 
                    src="./assets/logo/fontface-blk.png" />
                <h2 className="fontTitle title2" > Huertos <br></br> Urbanos</h2>    
                </div>
            </div>

            <div className="logoTrials">
            <img 
                id="GeneralIcon" 
                src="./assets/logo/icon-wheel.png" />
            <div className="fontLogo" ><img 
                    id="fontFaceTrial2" 
                    src="./assets/logo/fontface-blk.png" />
                <h2 className="fontTitle title3" > Huertos <br></br> Urbanos &#9734; </h2>    
                </div>
            </div>
        </div>
        <div className="TextTrialsDiv">

            <p className="TextTrial montseTest" > Montserrat: </p>
            <p className="TextTrial montseTestReg" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <p className="TextTrial montseTestItalic" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <br></br>
            <br></br>
            <br></br>
            <p className="TextTrial nunitoTest" > Nunito: </p>
            <p className="TextTrial nunitoTestReg" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <p className="TextTrial nunitoTestItalic" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <br></br>
            <br></br>
            <br></br>
            <p className="TextTrial SourceTest" > Source: &#9734; </p>
            <p className="TextTrial SourceTestReg" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <p className="TextTrial SourceTestItalic" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>

        </div>

    </GeneralLayout>
    <style jsx >{`

    .landingPageGeneral2{
        width: 100%
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .page2Main{
        min-height: 100vh;
        width: 100%;
        padding: unset;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .logoTrials{
        margin-top: 45px;
        display: flex;
        flex-direction: row;
    }

    #GeneralIcon{
        height:100px;
    }
    #fontFaceTrial2{
        height:40px;
        margin-left: 12px
    }
    .fontTitle{
        margin: unset;
        margin-top: 9px;
        margin-left: 21px;
        text-transform: uppercase;
        font-weight: 200;
        letter-spacing: 2px;
    }

    .title1{
        font-family: 'Montserrat', sans-serif;
        }
    .title2{
        font-family: 'Nunito', sans-serif;
    }
    .title3{
        letter-spacing: 4px;
        font-family: 'Source Sans Pro', sans-serif;    
    }

    .TextTrial{
        width: 80%;
        margin-left: 10%;
        font-size: 1.2em; 
    }


    .montseTest{
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5em;
    }
    .montseTestReg{
        font-family: 'Montserrat', sans-serif;
    }
    .montseTestItalic{
        font-family: 'Montserrat', sans-serif;
        font-style: italic;
    }
    .nunitoTest{
        font-family: 'Nunito', sans-serif;
        font-size: 1.5em;
    }
    .nunitoTestReg{
        font-family: 'Nunito', sans-serif;
    }
    .nunitoTestItalic{
        font-family: 'Nunito', sans-serif;
        font-style: italic;
    }
    .SourceTest{
        font-family: 'Source Sans Pro', sans-serif;    
        font-size: 1.5em;
    }
    .SourceTestReg{
        font-family: 'Source Sans Pro', sans-serif;    
    }
    .SourceTestItalic{
        font-family: 'Source Sans Pro', sans-serif;    
        font-style: italic;
    }




    `}
    </style>
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
    </>)
}