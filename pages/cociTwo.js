import styles from '../styles/CociliberVerTwo.module.css'
import React, { useState} from 'react';

import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let fontfaceblk =  "./assets/logoAndVar/fontface-blk.png";

import varieties from "../data/options.json";

export default function CociliberVerTwo(props){
   
    const [pickedVeggie, setPickedVeggie] = useState("rucola")
    const [visDiv, setVisDiv] = useState(styles.EachPlantSelector)
    const [visDiv2, setVisDiv2] = useState(styles.HiddenEachPlant)



    const recipieSec =(variety, visController)=>{
        let eachPlant = variety.options.map((eachItem)=>
            <p className={styles.eachPlant} onClick={()=> setPickedVeggie(eachItem) }>  {eachItem}  </p> )

        return(
            <div className={styles.plantCatContainer} >
                <div className={styles.plantCatTitle} onClick={()=>         
                    collapseController(variety) }> 
                    {variety.description} </div>
                <p className={styles.collapseBtn} onClick={()=>         
                    collapseController(variety) } > 
                    {visController===styles.EachPlantSelector ? 
                    <> colapsar </> : <> expandir </>} 
                    </p> 
                <div className={visController}  >
                {eachPlant}
                </div> 
            </div>
        )
    }

    const collapseController =(eachVariaty)=>{
        if (eachVariaty.plantType === "hortalizas" ){
            if(visDiv===styles.EachPlantSelector){
                setVisDiv(styles.HiddenEachPlant)
            } else if (visDiv===styles.HiddenEachPlant){
                setVisDiv(styles.EachPlantSelector)
            }
        } else if (eachVariaty.plantType === "aromáticas"){
            if(visDiv2===styles.EachPlantSelector){
                setVisDiv2(styles.HiddenEachPlant)
            } else if (visDiv2===styles.HiddenEachPlant){
                setVisDiv2(styles.EachPlantSelector)
            }
        }
    }

    const recipieDisplayer =()=>{
        return(
            <>
            <div className={styles.aRecipie} > </div>
            </>
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
                <div className={styles.pickedVeggie} > {pickedVeggie} </div>
                

            <h3 className={styles.PickerTitle} > Selecciona un tipo de Planta:</h3>
                {recipieSec(varieties[0], visDiv ) }
                {recipieSec(varieties[1], visDiv2 ) }
            
            
            
            </div>
        </div>
    </GeneralLayout>
    </>
)}