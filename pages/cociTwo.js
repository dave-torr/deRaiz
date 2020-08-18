import styles from '../styles/CociliberVerTwo.module.css'
import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'

let fontfaceblk =  "./assets/logoAndVar/fontface-blk.png";

export default function CociliberVerTwo(){
    
    const recipieSec =(pantType, recipieArray)=>{
        return(
            <div className={styles.plantCatContainer} >
                <div  > </div>
            </div>
        )
    }

return(
    <>
    <GeneralLayout>

    <div className={styles.CociLiberIntroCont} >
        <div className={styles.cLIntroTitle} > Coci <p style={{fontSize:"0.5em"}} > &#9752; </p> Liber </div>
        <div className={styles.cLIntroSubtitle} > Deliciosos sabores <br></br> preparados con tus plantas <br></br> criadas en casa. </div>
    </div>


    <div className={styles.RecipieGenCont} > 
        <img src={fontfaceblk} className={styles.iconBlk} />
    </div>

    </GeneralLayout>
    </>
)}