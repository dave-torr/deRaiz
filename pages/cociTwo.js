import styles from '../styles/CociliberVerTwo.module.css'
import React, { useState} from 'react';

import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let fontfaceblk =  "./assets/logoAndVar/fontface-blk.png";

let hortalizas = ["Lechuga roja", "Lechuga repollo", "Rúcola", "Acelga", "Apio", "Perejil Crespo", "Espinaca", "Radicho" ]

export default function CociliberVerTwo(props){
    
    const [pickedVeggie, setPickedVeggie] = useState("rucola")

    const recipieSec =(secTitle, plantType)=>{



        return(
            <div className={styles.plantCatContainer} >
                <div className={styles.plantCatTitle} > {secTitle} </div>
                <div className={styles.varietySelector} > 
                    {plantType}
                </div>
            </div>
        )
    }

return(
    <>
    <GeneralLayout>
    <div style={{minHeight: "80vh"}} > 
    <div className={styles.CociLiberIntroCont} >
        <div className={styles.cLIntroTitle} > Coci <p style={{fontSize:"0.5em"}} > &#9752; </p> Liber </div>
        <div className={styles.cLIntroSubtitle} > Deliciosos sabores <br></br> preparados con tus plantas <br></br> criadas en casa. </div>
    </div>

    <div className={styles.RecipieGenCont} > 
        <img src={fontfaceblk} className={styles.iconBlk} />
        
        {recipieSec("Hortalizas de Hoja", hortalizas )}
    </div>

    </div>
    </GeneralLayout>
    </>
)}