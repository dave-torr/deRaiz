import styles from "./../../styles/profileOptions.module.css"
import { useUser } from "../../utils/userHook"
import { useState } from "react";


export default function ProfileOptions(){    
    ////////////////////////////////////////////////////////////////////////
    //HOOKS
    //HOOKS

    const [user, { mutate }] = useUser();

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

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const generalOptionForm=()=>{
            //with sliders for yes or no options, much like a phone uses!
        return(<> 
            <div>
                <form>
                    {user.profilePic&& 
                    <> 
                    <div>
                    Sube una imagen de perfil!
                    </div>
                    </>}
                </form>
            </div>
        </>)
    }
    const userOptionsGeneralContainer=()=>{

        return(<> 
            <div className={styles.userOptsGenCont} >

            </div>
        </>)
    }
    ////////////////////////////////////////////////////////////////////////
    //FUNCTIONALITY
    //FUNCTIONALITY
    const sendToBackEnd=(e)=>{

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