import styles from '../styles/CociLiber.module.css'
import {GeneralLayout} from "../components/generalLayout.js"
import Pixel from '../components/Pixel'


export default function CociLiber(){

    const recipieSec =(pantType, recipieArray)=>{
        return(
            <div className={styles.GenRecipieCont} >
                <div  > </div>
            </div>
        )
    }

return(
    <>
    <GeneralLayout>

    <div className={styles.CociLiberIntroCont} >
        <img src="./assets/fillerImgs/plantLeft.png" className={styles.cLIntroImg} />
        <div className={styles.cLIntroTitle} > Coci <br></br>Liber </div>
        <img src="./assets/fillerImgs/plantright.png" className={styles.cLIntroImg} />
    </div>
        <div className={styles.clIntroSub} >
        - <br></br> Deliciosos sabores, preparados con <br></br> tus plantas criadas en casa. <br></br> -
        </div>


    </GeneralLayout>
    </>
)}