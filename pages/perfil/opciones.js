import styles from "./../../styles/profileOptions.module.css"
import { useUser } from "../../utils/userHook"
import { useEffect, useState } from "react";


export default function ProfileOptions(){    
    ////////////////////////////////////////////////////////////////////////
    //HOOKS
    //HOOKS

    const [user, { mutate }] = useUser();
    const [addPic, setaddPic] =useState(false)
    const [erasePic, setErasePic] =useState(false)
    useEffect(() => {
      if (!user) router.push('/registro')
    }, [user]);
    ////////////////////////////////////////////////////////////////////////
    //DESIGN
    //DESIGN
    const navi=()=>{
        return(<> </>)
    }
    const optionsIntro=()=>{

        return(<>
            <div className={styles.optionsIntroCont} > 
                <div className={styles.optionsTitle}>
                Opciones de usuario
                </div>
                <div className={styles.optionSubTitle} >
                    <div className={styles.userNameIntro}> {user.name} </div>
                    <img 
                        src="../assets/logoAndVar/fontface-blk.png"
                        alt="D´Raiz Icon"
                        className={styles.fontLogoImg}                 
                    />
                </div>
            </div>
        </>)
    }

    console.log(user)
    const generalOptionForm=()=>{
            //with sliders for yes or no options, much like a phone uses!
        return(<> 
            <div>
                <form>
                    <div className={styles.profPicOptions} >
                    <div className={styles.optionSectionTitle} >
                        Opciones de Imagen de Perfil
                    </div>
                        {user.profilePic===null? 
                        <> 
                            <div className={styles.formOptionContainer} >
                                <div className={styles.formOptionLabel} >
                                    Sube una imagen de perfil!
                                </div>
                                {addPic?<> 
                                    <div className={styles.formDeleteCancel} 
                                    onClick={()=>setaddPic(false)} >
                                        Cancelar
                                    </div>
                                    <div className={styles.formOptionAction} 
                                    onClick={()=>setaddPic(false)} >
                                        Añadir Imagen
                                    </div>
                                </>:<>
                                    <div className={styles.formOptionAction} 
                                    onClick={()=>setaddPic(true)}>
                                        Elige una imagen!
                                    </div>
                                </>}
                            </div>
                        </>:<>
                            <div className={styles.formOptionContainer} >
                                <div className={styles.formOptionLabel} >
                                    Elimina tu foto de Perfil
                                </div>
                                {erasePic ? 
                                <>
                                    <div className={styles.formDelete} 
                                    onClick={()=>setErasePic(false)} >
                                        Eliminar Imagen
                                    </div>
                                    <div className={styles.formDeleteCancel} 
                                    onClick={()=>setErasePic(false)} >
                                        Cancelar
                                    </div>
                                    
                                </> : <> 
                                <div className={styles.formDelete} onClick={()=>setErasePic(true)} >
                                    borrar imagen
                                </div>
                                </>}
                            </div>
                        </>}
                    </div>
                </form>
            </div>
        </>)
    }
    const userOptionsGeneralContainer=()=>{

        return(<> 
            <div className={styles.userOptsGenCont} >
                {generalOptionForm()}
            </div>
        </>)
    }
    ////////////////////////////////////////////////////////////////////////
    //FUNCTIONALITY
    //FUNCTIONALITY
    const eliminateProfilePic=(e)=>{

    }

    return(
        <><div style={{display: "flex", justifyContent:"center"}} > 
            <div className={styles.opcionesPage}>
            {optionsIntro()}
            {userOptionsGeneralContainer()}
            </div>
            </div>
        </>
    )
}