import React, { useState, useEffect } from 'react';
import { useUser } from "../../utils/userHook"
import { CircularProgress } from '@material-ui/core';

import styles from "./../../styles/components/misc.module.css"

function LogInOut(){
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
        console.log(res)
        if (res.status === 401){
        setLogginIn(false)
        setErrorMsg('Email o clave incorrecta. Por favor inténtalo otra vez!')
        } else if (res.status === 200) {
        const userObj = await res.json();
        mutate(userObj);
        setLogginIn(false)
        } else {
        setErrorMsg('Incorrect username or password. Try again!');
        }
    }
    const handleLogout= async ()=>{
        await fetch("/api/userAuth", {
            method: "DELETE",
            });
        mutate(null)
    }

    const LogIn=()=>{
        if(!user){
            return(
                <>
                <div className={styles.signInGenCont} >
                <h2>Iniciar Sesión</h2>
                <form className={styles.SignInForm} onSubmit={(e)=> onSubmit(e)}>
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
                </div>
                </>
            )
        } else if( user ){
            return(
                <>
                {/* add a few options: profile link, editar opciones, logout */}
                <div className={styles.userDisplayer} >
                <div className={styles.alias} > {user.name} </div>
                <div className={styles.popoverBtn} > Mi perfil </div>
                <div className={styles.popoverBtn} > Opciones de Usuario </div>
                <div className={styles.popoverBtn} > Reporta un problema </div>
                {LogOut()}
                </div>
                </>
            )
        }
    }

    const LogOut=()=>{
        return(
            <>
                {user&&<>
                <button className={styles.logOutBTN} onClick={()=>handleLogout()} > 
                Cerrar Sesión </button> </>}
            </>
        )
    }

    return(
        <>
            <div style={{overflow: "none"}} >
            {logginIn===true&&
            <><CircularProgress/></>}
            {logginIn===false&&
            <>{LogIn()}</>}
            </div>

        </>
    )

}; export { LogInOut }