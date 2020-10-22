import styles from "./../../styles/profileOptions.module.css"
import { useUser } from "../../utils/userHook"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


export default function ProfileOptions(){    
    ////////////////////////////////////////////////////////////////////////
    //HOOKS & UTILS
    //HOOKS & UTILS
    const router = useRouter()
    const profilePictureRef = useRef();
    const aliasRef = useRef();
    const userTypeRef = useRef();
    const ownedProductsRef = useRef();
    const [user, { mutate }] = useUser();
    const [addPic, setaddPic] =useState(false)
    const [erasePic, setErasePic] =useState(false)
    const [modalController, setModalController]=useState(false)
    const [isUpdated, setIsUpdated] =useState(false)
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
                    <div className={styles.userNameIntro}> {user&& <>{user.name}</>} </div>
                    <img 
                        src="../assets/logoAndVar/fontface-blk.png"
                        alt="D´Raiz Icon"
                        className={styles.fontLogoImg}                 
                    />
                </div>
            </div>
        </>)
    }
    const userDataOptions=()=>{
        return(<>
            <div className={styles.profPicOptions}>
                <div className={styles.optionSectionTitle} >
                    Opciones de Datos de Usuario
                </div>
                <div className={styles.formOptionContainer} >
                    <div className={styles.formOptionLabel} >
                        Actualiza tu Alias
                    </div>
                    <div style={{display: "flex", flexDirection:"column", textAlign: "center"}}>
                        <div>
                            Alias Actual:
                        </div>
                        <div>
                            {user.alias}
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", textAlign: "center"}}>
                        <label htmlFor="changeAlias" >
                            Cambiar Alias:
                        </label>
                        <div>
                            <form 
                                style={{display: "flex", flexDirection:"column"}} 
                                onSubmit={async (e)=> {
                                    e.preventDefault();
                                    setModalController(true)
                                    let formData = new FormData();
                                    formData.append('alias', e.currentTarget.changeAlias.value)
                                    formData.append('name', user.name)
                                    formData.append('userType', user.userType)
                                    formData.append('ownedProducts', user.ownedProducts)
                                    formData.append('profilePic', user.profilePic)
                                    console.log(formData)
                                    const res = await fetch('/api/profileUpdate', {
                                            method: 'PATCH',
                                            body: formData,
                                        });
                                    if (res.status === 200) {
                                        setIsUpdated(true)        
                                        const userData = await res.json();
                                        mutate({
                                            user: {
                                            ...user,
                                            ...userData.user,
                                            },
                                        });
                                    } else if (res.status === 500){
                                        console.error()
                                    }
                                }}>
                                <input 
                                    type="text"
                                    id="changeAlias"
                                    name="changeAlias"
                                    placeholder={user.alias}
                                />
                                <input 
                                    type="submit"
                                    value="Cambiar!"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.formOptionContainer} >
                    <div className={styles.formOptionLabel} >
                        Actualiza tu Nombre
                    </div>
                    <div style={{display: "flex", flexDirection:"column", textAlign: "center"}}>
                        <div>
                            Nombre Actual:
                        </div>
                        <div>
                            {user.name}
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", textAlign: "center"}}>
                        <label htmlFor="changeName" >
                            Cambiar Nombre:
                        </label>
                        <div>
                            <form 
                                style={{display: "flex", flexDirection:"column"}} 
                                onSubmit={async (e)=> {
                                    e.preventDefault();
                                    setModalController(true)
                                    let formData = new FormData();
                                    formData.append('alias', user.alias)
                                    formData.append('name', e.currentTarget.changeName.value)
                                    formData.append('userType', user.userType)
                                    formData.append('ownedProducts', user.ownedProducts)
                                    formData.append('profilePic', user.profilePic)
                                    const res = await fetch('/api/profileUpdate', {
                                            method: 'PATCH',
                                            body: formData,
                                        });
                                    if (res.status === 200) {
                                        setIsUpdated(true)        
                                        const userData = await res.json();
                                        mutate({
                                            user: {
                                            ...user,
                                            ...userData.user,
                                            },
                                        });
                                    } else if (res.status === 500){
                                        console.error()
                                    }
                                }}>
                                <input 
                                    type="text"
                                    id="changeName"
                                    name="changeName"
                                    placeholder={user.name}
                                />
                                <input 
                                    type="submit"
                                    value="Cambiar!"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.formOptionContainer} >
                    <div className={styles.formOptionLabel} >
                        Actualiza tu tipo de usuario
                    </div>
                    <div style={{display: "flex", flexDirection:"column", textAlign: "center"}}>
                        <div>
                            Tipo de usuario actual:
                        </div>
                        <div>
                            {user.userType}
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", textAlign: "center"}}>
                        <label htmlFor="changeUserType" >
                            Cambiar Tipo de usuario:
                        </label>
                        <div>
                            <form 
                                style={{display: "flex", flexDirection:"column"}} 
                                onSubmit={async (e)=> {
                                    e.preventDefault();
                                    setModalController(true)
                                    let formData = new FormData();
                                    formData.append('alias', user.alias)
                                    formData.append('name', user.name)
                                    formData.append('userType', e.currentTarget.changeUserType.value)
                                    formData.append('ownedProducts', user.ownedProducts)
                                    formData.append('profilePic', user.profilePic)
                                    const res = await fetch('/api/profileUpdate', {
                                            method: 'PATCH',
                                            body: formData,
                                        });
                                    if (res.status === 200) {
                                        setIsUpdated(true)        
                                        const userData = await res.json();
                                        mutate({
                                            user: {
                                            ...user,
                                            ...userData.user,
                                            },
                                        });     
                                    } else if (res.status === 500){
                                        console.error()
                                    }
                                }}>
                                <select id="changeUserType" name="changeUserType">
                                    <option value="Afisionada / Afisionado">Afisionada / Afisionado</option>
                                    <option value="Profesional en Agricultura">Profesional en Agricultura</option>
                                    <option value="Docente">Docente</option>
                                </select>
                                <input 
                                    type="submit"
                                    value="Cambiar!"
                                />
                            </form>
                        </div>
                    </div>                                        
                </div>
                <div className={styles.formOptionContainer} >
                    <div className={styles.formOptionLabel} >
                        Actualiza tu clave a la red D´Raiz
                    </div>
                    {/* user type picker */}
                </div>

            </div>
        </>)
    }
    const productOptions=()=>{
        return(<>
            <div className={styles.profPicOptions}>
                <div className={styles.optionSectionTitle} >
                    Opciones de Productos
                </div>
                <div className={styles.formOptionContainer} >
                    <div className={styles.formOptionLabel} >
                        Registra tus productos
                    </div>
                    {/* user type picker */}
                </div>
                <div className={styles.formOptionContainer} >
                    <div className={styles.formOptionLabel} >
                        Registra tus subscripciones
                    </div>
                    {/* user type picker */}
                </div>
            </div>
        </>)
    }
    const ImageOptions=()=>{
        return(<> 
            <div>
                <form id="imgForm" onSubmit={(e)=>updateProfile(e)}>
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
                                <div style={{width:"200px"}}>
                                    <label htmlFor="avatar" className={styles.imageUploader}>
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
                                    <div > *Formato .jpg o .png solamente 
                                    </div>
                                    <button className={styles.submitBTN} type="submit" value="imgForm"> Subir foto!</button>
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
                                onClick={async()=>{setErasePic(false)
                                let formData = new FormData();
                                formData.append('profilePicture', null)
                                formData.append('alias', user.alias)
                                formData.append('userType', user.userType)
                                formData.append('ownedProducts', user.ownedProducts)
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
                                setIsUpdated("Foto Eliminada")    
                                }}}>
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
            {user&&
                <>
                    {userDataOptions()}
                    {productOptions()}
                    {ImageOptions()}
                </>}
            </div>
        </>)
    }

    const feedBackDialogue=()=>{

        return(
            <>
                <Dialog open={modalController} onClose={()=>{
                    setModalController(false)
                    setIsUpdated(false)
                }} >
                    <DialogContent >
                    <div className={styles.dialogueCont} >
                    Estamos actualizando tus datos!
                        <iframe src="https://giphy.com/embed/loRXcxxkcdgVyFqqIK" width="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

                    <div className={styles.updateConfirm} > {isUpdated?
                    <> 
                        Datos Actualizados!
                    </>:<> ...en proceso </>}</div>
                    </div>
                    </DialogContent>
                </Dialog>
            </>
        )
    }

    ////////////////////////////////////////////////////////////////////////
    //FUNCTIONALITY
    //FUNCTIONALITY
    const updateProfile=async(e)=>{
        e.preventDefault();
        let formData = new FormData();
        if (profilePictureRef.current.files[0]) { 
            formData.append('profilePicture', profilePictureRef.current.files[0])} else {formData.append('profilePicture', user.profilePicture)}
        if (aliasRef.current===undefined){
            formData.append('alias', user.alias)
            } else {formData.append('alias', aliasRef.current.value)}
        if (userTypeRef.current===undefined){
            formData.append('userType', user.userType)
            } else {formData.append('userType', userTypeRef.current.value)}
        if (ownedProductsRef.current===undefined){
            formData.append('ownedProducts', user.ownedProducts)
            } else {formData.append('ownedProducts', ownedProductsRef.current.value)}
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
        setIsUpdated("Actualizacion Exitosa!")        
        }                    
    }


    return(
        <>
            <div style={{display: "flex", justifyContent:"center"}} > 
                <div className={styles.opcionesPage}>
                    {optionsIntro()}
                    {userOptionsGeneralContainer()}
                    {feedBackDialogue()}
                </div>
            </div>
        </>
    )
}