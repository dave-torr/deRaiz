import styles from '../styles/CociliberVerTwo.module.css'
import React, { useState} from 'react';

import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let fontfaceblk =  "./assets/logoAndVar/fontface-blk.png";

import varieties from "../data/options.json";

export default function CociliberVerTwo(props){

    console.log("varieties", varieties)
    
    const [pickedVeggie, setPickedVeggie] = useState("rucola")
    const [visDiv, setVisDiv] = useState(styles.EachPlantSelector)
    const [visDiv2, setVisDiv2] = useState(styles.HiddenEachPlant)



    const recipieSec =(variety, visController)=>{
        let eachPlant = variety.options.map((eachItem)=>
            <p className={styles.eachPlant} >  {eachItem}  </p> )

        return(
            <div className={styles.plantCatContainer} >
                <div className={styles.plantCatTitle} > {variety.description} </div>
                <p id={variety.plantType} onClick={()=> collapseController(variety) } > collapse </p> 
                <div className={visController}>
                 {eachPlant}
                </div> 
            </div>
        )
    }

    const collapseController =(eachVariaty)=>{
        if (eachVariaty.plantType === "hortalizas" ){
            console.log( "Horta BIATCH")
            if(visDiv===styles.EachPlantSelector){
                setVisDiv(styles.HiddenEachPlant)
            } else if (visDiv===styles.HiddenEachPlant){
                setVisDiv(styles.EachPlantSelector)
            }
        } else if (eachVariaty.plantType === "aromáticas"){
            console.log( "Aroma of Christ Church")
            if(visDiv2===styles.EachPlantSelector){
                setVisDiv2(styles.HiddenEachPlant)
            } else if (visDiv2===styles.HiddenEachPlant){
                setVisDiv2(styles.EachPlantSelector)
            }
        }
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
                


                {recipieSec(varieties[0], visDiv ) }
                {recipieSec(varieties[1], visDiv2 ) }
            
            
            
            </div>
        </div>
    </GeneralLayout>
    </>
)}