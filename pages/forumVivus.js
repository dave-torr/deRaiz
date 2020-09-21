//Forum
//Tags, and filtered Q&A, initial question deposit, comments and 

import styles from "./../styles/forumVivus.module.css"



export default function ForumVivus(){

    const IntroSec=()=>{
        return(
            <>
            <div className={styles.IntroCont} >
                <img className={styles.IconOne} alt="icon green" src="./assets/logoAndVar/icon-lightGrn.png" />
                    <div className={styles.IntroTitle} > FORUM <p style={{fontSize:"0.5em"}} > &#9752; </p> VIVUS </div>
                    <div className={styles.IntroSubtitle} > 
                    Tu espacio de discusión <br></br> 
                    aprendizaje, e ideas <br></br> de tus huertos en casa <br></br> 
                    <p className={styles.arrowDeco}>
                    &#8609; 
                    </p>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <div style={{minHeight: "80vh"}} >

            {IntroSec()}
        </div> 
        </>
    )
}