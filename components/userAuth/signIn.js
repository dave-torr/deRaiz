import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { useUser } from "../../utils/userHook"
import { CircularProgress } from '@material-ui/core';

import styles from "./../../styles/components/misc.module.css"

function LogInOut(){
    const [errorMsg, setErrorMsg] = useState('');
    const [user, { mutate }] = useUser();
    const [logginIn, setLogginIn] = useState(false);  
    const [messUpCount, setmessUpCount]= useState(0);


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
            setmessUpCount(messUpCount+1)
            setErrorMsg('Email o clave incorrecta. Por favor inténtalo otra vez!')
        } else if (res.status === 200) {
            const userObj = await res.json();
            mutate(userObj);
            setLogginIn(false)
        } else {
            setErrorMsg('Incorrect username or password. Try again!')
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
                    {console.log(messUpCount)}
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
                <div className={styles.popoverBtn} > 
                    <Link href="/perfil" >
                        Mi perfil 
                    </Link>
                </div>
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

    const resetPassword=()=>{
        //when mess up count surpasses 5, offer to reset password
        return(
            <> 
            <div className={styles.passwordForget} >
            
            Olvidaste tu clave? <br></br>
            ¡No hay problema! <br></br>
            Cambia tu clave AQUI <br></br>
            </div>
            </>
        )
    }

    return(
        <>
            <div style={{overflow: "none"}} >
            {logginIn===true&&
            <div style={{width: "130px", height: "120px", textAlign: "center"}} ><CircularProgress/></div>}
            {logginIn===false&&
            <>
                {messUpCount<6?
                <>{LogIn()} </>: 
                <>{resetPassword()} </>}
                
                </>}
            </div>

        </>
    )

}; export { LogInOut }