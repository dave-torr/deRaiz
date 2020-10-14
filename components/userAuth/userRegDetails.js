import { useState } from "react"
import styles from "./../../styles/registerUser.module.css"

function RegistrationDetails(){

const [isOwner, setIsOwner] = useState()

    const updateUserProfile = async (e)=>{
        e.preventDefault()
    }

    return(
        <>
        <div className={styles.additionalUserDetailsGenCont}>
            <form onSubmit={(e)=>{updateUserProfile(e)}} className={styles.stepTwoForm} >
                <label htmlFor="alias"  className={styles.aliasLabel} > Alias o apodo</label>
                <input 
                    type="text"
                    id="alias"
                    className={styles.inputElement}
                    />
                <label htmlFor="userType" className={styles.userTypeLabel} > Experto en Hidroponia? Curiosa por aprender sobre huertos en casa? Cuentanos que tipo de usuario te consideras: 
                </label>
                    <select required className={styles.inputElement} >
                        <option> Afisionada / Afisionado  </option>
                        <option> Profesional en Agricultura  </option>
                        <option> Docente  </option>
                    </select>
                {isOwner? 
                <>
                <label htmlFor="ownedProd" className={styles.productLabel} >
                    Enlista tus productos aqui:
                </label>
                <input 
                    className={styles.inputElement} 
                    type="text"
                    id="ownedProd"
                    placeholder="Tus productos!"
                    />
                </> : <>
                <div className={styles.productLabel} > ¿Eres dueña/dueño ya de un producto D´Raiz? </div>
                <input type="button"
                    className={styles.inputBotton}
                    value="Si!"
                    onClick={()=>setIsOwner(true)}
                    />
                </>
                }
                <div className={styles.profPicCont}>

                </div>
            </form>
        </div>
        </>
    )
} export {RegistrationDetails}