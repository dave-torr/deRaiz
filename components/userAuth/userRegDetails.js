import styles from "./../../styles/registerUser.module.css"

function RegistrationDetails(){

    const updateUserProfile = async (e)=>{
        e.preventDefault()
    }

    return(
        <>
        <div className={styles.additionalUserDetailsGenCont}>
            <form onSubmit={(e)=>{updateUserProfile(e)}}>
                <label htmlFor="alias" > Alias</label>
                <input 
                    type="text"
                    id="alias"
                    />
                <label htmlFor="userType" > Experto en Hidroponia? Curiosa por aprender sobre huertos en casa? Cuentanos que tipo de usuario te consideras:  
                </label>
                    <select>
                        <option> Afisionada / Afisionado  </option>
                        <option> Profesional en Agricultura  </option>
                        <option> Docente  </option>
                    </select>
                <label htmlFor="" > </label>
                <input 
                    type="radio"
                    id=""
                    />
                <label htmlFor="" > </label>
                <input 
                    type="text"
                    id=""
                    />
            </form>
        </div>
        </>
    )
} export {RegistrationDetails}