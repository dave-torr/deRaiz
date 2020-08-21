import styles from '../styles/CociliberVerTwo.module.css'
import React, { useState} from 'react';

import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let fontfaceblk =  "./assets/logoAndVar/fontface-blk.png";

import varieties from "../data/options.json";

export default function CociliberVerTwo(props){

    console.log("varieties", varieties)
    
    const [pickedVeggie, setPickedVeggie] = useState("rucola")

    const recipieSec =(variety)=>{
        return(
            <div className={styles.plantCatContainer} >
                <div className={styles.plantCatTitle} > {variety.description} </div>

            </div>
        )
    }









return(
    <>
    <GeneralLayout>
        <div style={{minHeight: "80vh"}} > 
            <div className={styles.CociLiberIntroCont} >
                <div className={styles.cLIntroTitle} > Coci <p style={{fontSize:"0.5em"}} > &#9752; </p> Liber </div>
                <div className={styles.cLIntroSubtitle} > Deliciosos sabores <br></br> preparados con tus plantas <br></br> criadas en casa. <br></br> </div>
            </div>
            <div className={styles.RecipieGenCont} > 
                <img src={fontfaceblk} className={styles.iconBlk} />
                


                {recipieSec(varieties[0] )}
            
            
            
            </div>
        </div>
    </GeneralLayout>
    </>
)}