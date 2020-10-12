import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { CircularProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useUser } from "../../utils/userHook"

import styles from "./../../styles/components/forumDalogues.module.css"

function SignInPopover(props){
    const [errorMsg, setErrorMsg] = useState('');
    const [user, { mutate }] = useUser();
    const [logginIn, setLogginIn] = useState(false);  

    const onSubmit = async (e)=>{
        e.preventDefault();
        setLogginIn(true)
        const body = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            };
        const res = await fetch('/api/userAuth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            });
        if (res.status === 401){
            setLogginIn(false)
            setErrorMsg('Email o clave incorrecta. Por favor inténtalo otra vez!')
        } else if (res.status === 200) {
            const userObj = await res.json();
            mutate(userObj);
            setLogginIn(false)
            props.setSignInModal(false)
            props.setModalOpen(true)
        } else {
            setErrorMsg('Incorrect username or password. Try again!');
        }
    }

    return(
        <>
        <Dialog open={props.signInModal} onClose={()=>{props.setSignInModal(false)}}>
        <DialogContent>
        <div className={styles.signInGenCont}>
            <h2 style={{textAlign: "center"}} > Para dejar tu comentario, por favor inicia una sesion o genera tu usuario en D´Raiz.org:</h2>
            <br></br>
            <div className={styles.registerOrSign}> 
        {logginIn?
        <>
            <CircularProgress/>
            </>
            :
            <> 
            <form className={styles.SignInForm} onSubmit={(e)=> onSubmit(e)}>
            <h3>Iniciar Sesión</h3>
                {errorMsg ? <p className={styles.SignInError}>{errorMsg}</p> : null}
                <label htmlFor="email"                       
                className={styles.SignInLabel} >
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={styles.SignInField}
                />
                </label>
                <label htmlFor="password"
                className={styles.SignInLabel} >
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={styles.SignInField}
                />
                </label>
                <input type="submit" value="Ingresar!" className={styles.SignInBTN} />
            </form>
            <div className={styles.separatorDeco} ></div>
            <div className={styles.registerDiv}>
                <h3>
                    Se parte de la comunidad! 
                </h3>
                <div className={styles.dialoguetwoBtn} > Registra usuario</div>
            </div>
        </>}
            </div>
        </div>
        </DialogContent>
        </Dialog>
        </>
    )

} export { SignInPopover }
/////////////////////////////////////////
/////////////////////////////////////////
function SignInPopTwo(){

return(
    <>
    
    </>
)
} export {SignInPopTwo}