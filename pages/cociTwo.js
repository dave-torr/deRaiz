import styles from '../styles/CociliberVerTwo.module.css'
import React, { useState} from 'react';

import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let fontfaceblk =  "./assets/logoAndVar/fontface-blk.png";
let pizzaRucola =  "./assets/recipies/rucolaPizza.jpg";

import varieties from "../data/options.json";
import recipieBook from "../data/cociLiber.json";

export default function CociliberVerTwo(props){
   
    const [pickedVeggie, setPickedVeggie] = useState("rucola")
    const [pickedRecipie, setPickedRecipie] = useState(recipieBook.rucolaPizza)
    const [visDiv, setVisDiv] = useState(styles.HiddenEachPlant)
    const [visDiv2, setVisDiv2] = useState(styles.HiddenEachPlant)
    const [recipieStepsVis, setrecipieStepsVis] = useState(styles.hiddenSteps)
    const [recipieIngredVis, setrecipieIngredVis] = useState(styles.hiddenIngredients)

    console.log(recipieBook)

    const recipieSec =(variety, visController)=>{
        let eachPlant = variety.options.map((eachItem, i)=> <>

            <p key={i} className={styles.eachPlant} onClick={()=> setPickedVeggie(eachItem) }>  {eachItem} 
            <div className={styles.plantSelectorDeco}></div> </p>
             
            </>)

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

    const recipieDisplayer =(recipie, visSteps, visIngredients)=>{

        let recipieSteps = recipie.steps.map((elements, i)=>
        <li key={i} className={styles.eachRecipieStep } > {elements} </li> )
        let recipieIngredients = recipie.ingredients.map((elements, i)=>
        <li key={i} className={styles.eachRecipieIngredient } > {elements} </li> )

        return(
            <>
            <div className={styles.aRecipie}> 
            <div className={styles.recipieDeco}> &#9753; </div>
            <div className={styles.recipieGrid} >
                <div className={styles.aRecipieTitle} > 
                     {recipie.recipieTitle}
                </div>
            <img src={recipie.img} alt={recipie.imgAlt} className={styles.recipieImg} />

                <div className={styles.gridMainPlant} > 
                    Delicias con {recipie.mainPlant} 
                    </div>
                <div className={styles.gridTime} > 
                    {recipie.cookingTime} min &#9732;
                    </div>
                <div className={styles.gridPortionSize} > 
                    {recipie.yield} personas
                    </div>

                <div className={styles.gridIngredients} >
                    <div className={styles.gridIngredientTitle} 
                        onClick={()=>{
                        if(visIngredients===styles.visibleIngredients){
                            setrecipieIngredVis(styles.hiddenIngredients)
                        } else if (visIngredients===styles.hiddenIngredients){
                            setrecipieIngredVis(styles.visibleIngredients)
                        } }}>  
                        INGREDIENTES: <br></br>
                    {visIngredients===styles.hiddenIngredients ? 
                        <> expandir</> : <> colapsar </>} 
                    </div>
                    <ul className={visIngredients} >
                            {recipieIngredients}
                            </ul>
                    </div>

                <div className={styles.gridcookingSteps} >
                <div 
                className={styles.gridIngredientTitle}
                onClick={()=>{
                    if(recipieStepsVis===styles.visibleSteps){
                        setrecipieStepsVis(styles.hiddenSteps)
                    } else if (recipieStepsVis===styles.hiddenSteps){
                        setrecipieStepsVis(styles.visibleSteps)
                    } }}> 
                    PASOS:
                    <br></br>
                    {visSteps===styles.hiddenSteps ? 
                    <> expandir</> : <> colapsar </>} 
                </div> 
                    <ol className={visSteps}> {recipieSteps} </ol>
                </div>
            </div>

            <div className={styles.nextRecipie} > Cucu </div>

            </div> 
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
                
            <h2 className={styles.PickerTitle}>Paso 1:</h2>
            <h3 className={styles.PickerTitle} > Selecciona un tipo de Planta:</h3>
                {recipieSec(varieties[0], visDiv ) }
                {recipieSec(varieties[1], visDiv2 ) }
            
            <div className={styles.recipieCont} > 

            <h2 className={styles.recipieGuideTite} > Paso 2:</h2>            
            <h3 className={styles.recipieGuide} > Prueba una deliciosa receta:</h3>            
            </div>
            </div>
            {recipieDisplayer(pickedRecipie, recipieStepsVis, recipieIngredVis)}
        </div>
    </GeneralLayout>
    </>
)}