import styles from '../styles/CociliberVerTwo.module.css'
import React, { useState} from 'react';

import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let fontfaceblk =  "./assets/logoAndVar/fontface-blk.png";
let pizzaRucola =  "./assets/recipies/rucolaPizza.jpg";

import varieties from "../data/options.json";

let recipie1 ={
    "recipieTitle": "Rucola & Prosciutto Pizza",
    "mainPlant": "Rucola",
    "cookingTime": 45,
    "yield": "4 - 6",
    "ingredients": ["Varios manojos de Rucola recien cosechada en tu huerto", "1 Masa de Pizza redonda", "2 cucharas de aceite de oliva", "1/2 tasa de pasta de tomate", "1.5 tasas de queso mozarella rayado", "8 cortes delgados de prosciutto" ],
    "steps": [
        "If you have a pizza stone, place it on a rack in the middle of the oven. Heat the oven to 550°F (or maximum oven temperature) for at least 30 minutes.", 
        "If transferring the pizza to a stone in the oven, assemble on a well-floured peel or cutting board. Otherwise, assemble on the surface you will be cooking on (parchment paper, baking sheet, etc.). Working with one piece of dough at a time, roll or stretch it into a 10- to 12-inch circle. Brush the edges of the dough with 1 tablespoon of olive oil. Spread half of the tomato sauce over the rest of the dough. Sprinkle with about a 1/4 of the cheese. Lay 4 prosciutto slices so they are evenly covering the dough. Sprinkle with another 1/4 of the cheese.", 
        "Bake the pizza until edges are lightly browned and cheese is bubbly and browned in spots, about 6 minutes at 550°F. Remove from oven to a cutting board, scatter half of the arugula over the top, and cut and serve immediately. Repeat with the remaining dough and toppings."
        ],
}

export default function CociliberVerTwo(props){
   
    const [pickedVeggie, setPickedVeggie] = useState("rucola")
    const [visDiv, setVisDiv] = useState(styles.HiddenEachPlant)
    const [visDiv2, setVisDiv2] = useState(styles.HiddenEachPlant)
    const [recipieStepsVis, setrecipieStepsVis] = useState(styles.hiddenSteps)
    const [recipieIngredVis, setrecipieIngredVis] = useState(styles.hiddenIngredients)



    const recipieSec =(variety, visController)=>{
        let eachPlant = variety.options.map((eachItem, i)=>
            <p key={i} className={styles.eachPlant} onClick={()=> setPickedVeggie(eachItem) }>  {eachItem}  </p> )

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
                <div className={styles.aRecipieTitle} > 
                    &#9753; <br></br> {recipie.recipieTitle}
                </div>
            <img src={pizzaRucola} className={styles.recipieImg} />
            <div className={styles.recipieGrid} >

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
                        I N G R E D I E N T E S:
                    </div>
                    {visIngredients===styles.hiddenIngredients ? 
                        <> expandir</> : <> colapsar </>} 
                    <ul className={visIngredients} >
                            {recipieIngredients}
                            </ul>
                    </div>

                <div className={styles.gridcookingSteps} onClick={()=>{
                    if(recipieStepsVis===styles.visibleSteps){
                        setrecipieStepsVis(styles.hiddenSteps)
                    } else if (recipieStepsVis===styles.hiddenSteps){
                        setrecipieStepsVis(styles.visibleSteps)
                    } }}> 
                    P A S O S:
                    <br></br>
                    {visSteps===styles.hiddenSteps ? 
                    <> expandir</> : <> colapsar </>} 
                    <ol className={visSteps}> {recipieSteps} </ol>
                </div>
            </div> 
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
                

            <h3 className={styles.PickerTitle} > Selecciona un tipo de Planta:</h3>
                {recipieSec(varieties[0], visDiv ) }
                {recipieSec(varieties[1], visDiv2 ) }
            
            <div className={styles.recipieCont} > 
            <h3 className={styles.recipieGuide} > Prueba una deliciosa receta:</h3>            
            </div>
            </div>
            {recipieDisplayer(recipie1, recipieStepsVis, recipieIngredVis)}
        </div>
    </GeneralLayout>
    </>
)}