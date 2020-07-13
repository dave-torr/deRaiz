import Head from 'next/head'
import {GeneralLayout} from "../components/generalLayout.js"

export default function Page3 (){
return(<>
    <div className="landingPageGeneral2">
    <Head>
<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500&family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet"></link>
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
                <h2 className="fontTitle title3" > Huertos <br></br> Urbanos &#9734;</h2>    
                </div>
            </div>
        </div>
        <div className="TextTrialsDiv">

            <p className="TextTrial FrankRuhlTest" > Frank Ruhl: </p>
            <p className="TextTrial FrankRuhlTestReg" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <p className="TextTrial FrankRuhlTestItalic" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <br></br>
            <br></br>
            <br></br>
            <p className="TextTrial NotoSSTest" > Noto Sefir: </p>
            <p className="TextTrial NotoSSTestReg" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <p className="TextTrial NotoSSTestItalic" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <br></br>
            <br></br>
            <br></br>
            <p className="TextTrial PlayFairTest" > PlayFair: &#9734; </p>
            <p className="TextTrial PlayFairTestReg" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>
            <p className="TextTrial PlayFairTestItalic" > El futuro de tu alimentacion nunca ha sido tan accesible! </p>

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
        font-family: 'Frank Ruhl Libre', serif;        }
    .title2{
        font-family: 'Noto Serif', serif;    
    }
    .title3{
        letter-spacing: 4px;
        font-family: 'Playfair Display', serif;    
    }

    .TextTrial{
        width: 80%;
        margin-left: 10%;
        font-size: 1.2em; 
    }


    .FrankRuhlTest{
        font-family: 'Frank Ruhl Libre', serif;        
        font-size: 1.5em;
    }
    .FrankRuhlTestReg{
        font-family: 'Frank Ruhl Libre', serif;    
        }
    .FrankRuhlTestItalic{
        font-family: 'Frank Ruhl Libre', serif;       
         font-style: italic;
    }


    .NotoSSTest{
        font-family: 'Noto Serif', serif;        
        font-size: 1.5em;
    }
    .NotoSSTestReg{
        font-family: 'Noto Serif', serif;    
    }
    .NotoSSTestItalic{
        font-family: 'Noto Serif', serif;        
        font-style: italic;
    }


    .PlayFairTest{
        font-family: 'Playfair Display', serif;    
        font-size: 1.5em;
    }
    .PlayFairTestReg{
        font-family: 'Playfair Display', serif;    
    }
    .PlayFairTestItalic{
        font-family: 'Playfair Display', serif;    
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