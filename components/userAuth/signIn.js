import React, { useState, useEffect } from 'react';
import { useUser } from "../../utils/userHook"
import { CircularProgress } from '@material-ui/core';

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
                <form onSubmit={(e)=> onSubmit(e)}>
                    {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
                    <label htmlFor="email">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email address"
                    />
                    </label>
                    <label htmlFor="password">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    </label>
                    <input type="submit"/>
                </form>
                </>
            )
        } else if( user ){
            return(
                <>
                Hello Leo! 
                <br></br>
                {user.name}
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
            {LogIn()}
        </>
    )

}; export { LogIn }