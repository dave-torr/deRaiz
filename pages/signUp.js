//user sign up form, photoupload, and functionality to store recipies, and apply for "verification" as thought leader, 

import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useUser } from "./../utils/userHook"
import { CircularProgress } from '@material-ui/core';


export default function Signup(){

    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState('');
    const [processStatus, setProsStat ]=useState("void")

    // useEffect(() => {
    // // redirect to home if user is authenticated
    //     if (user) Router.replace('/');
    // }, [user]);

    // 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProsStat("process")
        const body = {
            email: e.currentTarget.email.value,
            name: e.currentTarget.name.value,
            password: e.currentTarget.password.value,
            };
        const res = await fetch('/api/userProfiles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            });
        if (res.status === 201) {
            const userObj = await res.json();
        // writing our user object to the state
        mutate(userObj);
        setProsStat("registered")

            } else {
        setErrorMsg(await res.text());
        setProsStat("void")
        }
    };

    const userDisplay=()=>{
        return(
            <>
                Hello {user.name}
            </>
        )
    }

    const SignUpForm=()=>{
        return(
        <>
        <div>
            <h2>Sign up</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
            {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
            <label htmlFor="name">
                <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                />
            </label>
            <label htmlFor="email">
                <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                />
            </label>
            <label htmlFor="password">
                <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                />
            </label>
            <button type="submit">Sign up</button>
            </form>
        </div>
        </>             
        )
    }

    return(
        <>
            {user?
            <> {userDisplay()} </>
            :
            <> {processStatus==="void"&&
            <> {SignUpForm()} </>}
            {processStatus==="process"&&
            <> <CircularProgress/> </>} 
            </>}
        </>
    )
}