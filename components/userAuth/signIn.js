import React, { useState, useEffect } from 'react';
import { useUser } from "../../utils/userHook"
import { CircularProgress } from '@material-ui/core';

import styles from "./../../styles/components/misc.module.css"

function LogIn(){
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
        if (res.status === 200) {
        const userObj = await res.json();
        mutate(userObj);
        setLogginIn(false)
        } else {
        setErrorMsg('Incorrect username or password. Try again!');
        }
    }

    const LogIn=()=>{
        if(!user){
            return(
                <>
                <h2>Sign in</h2>
                <form className={styles.SignInForm} onSubmit={(e)=> onSubmit(e)}>
                    {errorMsg ? <p className={styles.SignInError}>{errorMsg}</p> : null}
                    <label htmlFor="email"                         
                    className={styles.SignInLabel} >
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email address"
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
                    <input type="submit" className={styles.SignInBTN} />
                </form>
                </>
            )
        } else if( user ){
            return(
                <>
                <p className={styles.userDisplayer} > 
                Hola {user.name}! </p>
                <div className={styles.profileBtn} > Mi perfil </div>
                </>
            )
        }
    }

    return(
        <>
            {logginIn===true&&
            <><CircularProgress/></>}
            {logginIn===false&&
            <>{LogIn()}</>}
        </>
    )

}; export { LogIn }