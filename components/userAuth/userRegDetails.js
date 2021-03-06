import { useRef, useState } from "react"
import styles from "./../../styles/registerUser.module.css"
import { useUser } from "../../utils/userHook"
import { useRouter } from "next/router"


function RegistrationDetails(props){

const [isOwner, setIsOwner] = useState()
const [profilePicTrig, setprofilePicTrig] = useState()
const profilePictureRef = useRef();
const aliasRef = useRef();
const userTypeRef = useRef();
const ownedProductsRef = useRef();
const [user, { mutate }] = useUser();
const [msg, setMsg] = useState({ message: '', isError: false });
const [isUpdating, setIsUpdating] = useState(false);
const router = useRouter()


    const updateUserProfile = async (e)=>{
        e.preventDefault();
        setIsUpdating(true);
        let formData = new FormData();
        if (profilePictureRef.current.files[0]) { 
            formData.append('profilePicture', profilePictureRef.current.files[0])};
            formData.append('alias', aliasRef.current.value);
            formData.append('userType', userTypeRef.current.value);
            formData.append('userDetailUpdate', true);
            formData.append('name', user.name);
        if(isOwner){
            formData.append('ownedProducts', ownedProductsRef.current.value);
        }    
        const res = await fetch('/api/profileUpdate', {
                method: 'PATCH',
                body: formData,
            });
        if (res.status === 200) {
            const userData = await res.json();
            mutate({
                user: {
                ...user,
                ...userData.user,
                },
            });
        setMsg({ message: 'Profile updated' });
        router.push('/perfil')
            } else {
        setMsg({ message: await res.text(), isError: true });
        }
    }

    return(
        <>
        <div className={styles.additionalUserDetailsGenCont}>
            <form onSubmit={(e)=>{updateUserProfile(e)}} className={styles.stepTwoForm} >
                <label htmlFor="userType" className={styles.userTypeLabel} > Experto en Hidroponia? Curiosa por aprender sobre huertos en casa? Cuentanos que tipo de usuario te consideras: 
                </label>
                    <select ref={userTypeRef} required className={styles.inputElement} >
                        <option defaultValue > Afisionada / Afisionado  </option>
                        <option> Profesional en Agricultura  </option>
                        <option> Docente  </option>
                    </select>
                <label htmlFor="alias"  className={styles.aliasLabel} > Alias o apodo</label>
                <input 
                    type="text"
                    id="alias"
                    className={styles.inputElement}
                    ref={aliasRef}
                    />
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
                        ref={ownedProductsRef}
                        />
                </> : <>
                    <div className={styles.productLabel} > 
                        ¿Eres dueña/dueño ya de un producto D´Raiz? 
                        </div>
                    <input type="button"
                        className={styles.inputBotton}
                        value="Si!"
                        onClick={()=>setIsOwner(true)}
                        />
                    </>
                    }
                <div className={styles.profPicCont}>
                    {profilePicTrig? 
                    <>
                    <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <label htmlFor="avatar"  className={styles.imageUploader}>
                    Elije tu imagen de Perfil!*
                        </label>
                    <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/png, image/jpeg"    
                        ref={profilePictureRef}
                        />
                    <br></br>
                    <br></br>
                        <div className={styles.imageFormat}> *Formato .jpg o .png solamente 
                        </div>
                    </div>
                    </> : <>
                    {/* <div className={styles.profileIconPicker} >
                        <div className={styles.productLabel} >
                            Puedes elejir uno de los siguientes iconos para tu perfil, o subir una imagen personalizada (abajo):
                            </div>
                        <div>
                        IconPicker sets url to specific icon, facilitating it for everyone.
                        </div>
                    </div> */}
                    <div className={styles.productLabel} >
                        Te gustaria subir una imagen personalizada de perfil?
                        </div>
                    <input type="button"
                        className={styles.inputBotton}
                        value="Si!"
                        onClick={()=>setprofilePicTrig(true)}
                        />
                    </>}
                </div>

            {isUpdating? 
                <>  
                    <div style={{textAlign:"center"}} >
                        <h2> Procesando tu imagen y datos!... </h2>
                        {props.progress}
                    </div>
                </>:<> 
                <button className={styles.submitBTN} type="submit"> Siguiente Paso!</button>
            </>}
            </form>
        </div>
        </>
    )
} export {RegistrationDetails}