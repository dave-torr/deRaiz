//user sign up form, photoupload, and functionality to store recipies, and apply for "verification" as thought leader, 

import React, { useState, useEffect } from 'react';
import { useUser } from "../utils/userHook"
import { CircularProgress, Fab } from '@material-ui/core';
import styles from "../styles/registerUser.module.css"
import {RegistrationDetails} from "./../components/userAuth/userRegDetails"
import {Nav2} from "./../components/navBar"

export default function Signup(){
    const [profileStep, setProfileStep] = useState("two")
    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState('');
    const [processStatus, setProsStat ]=useState("void")
    const [isUpdating, setIsUpdating ]=useState(false)

    // useEffect(() => {
    // // redirect to home if user is authenticated
    //     if (user) Router.replace('/');
    // }, [user]);

//USER STATE API is continually called and when signed in, sent to home. will this alwas happen when using the userHook?  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProsStat("process")
        const body = {
            email: e.currentTarget.email.value,
            name: e.currentTarget.name.value,
            password: e.currentTarget.password.value,
            savedPublications:  [],
            likedPublications:  [],
            userType:  null,
            profilePic:  null,
            signUpStream: "website",

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
        setProfileStep("two")
            } else {
        setErrorMsg(await res.text());
        setProsStat("void")
        }
    };

    const userDisplay=()=>{
        return(
            <>
            <Nav2/>
                Hello {user.name}
            </>
        )
    }

    const UserStepOne=()=>{
        return(
        <>
        <div className={styles.StepOneGenCont}>
            <img 
                className={styles.logoGreen}
                src="./assets/logoAndVar/fontfaceExt-lghtGrn.png"
                alt="D´Raiz Icon"
                />
            <h2 className={styles.signupIntro} >
                Bienvenido a la comunidad digital D´Raiz!</h2>
            <div className={styles.signupIntroText} > 
                Primero, registramos tu nombre <br></br> y correo electronico </div>
            <div className={styles.cardContent}>
            <form onSubmit={(e)=>handleSubmit(e)} className={styles.FormGen}>
                {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
            <div className={styles.formElement} >
                <label className={styles.formLabels} htmlFor="name"> Nombre </label>
                <input
                className={styles.inputElement}
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre completo"
                />
                </div>
            <div className={styles.formElement} >
                <label className={styles.formLabels} htmlFor="email"> Correo Electronico </label>
                <input
                className={styles.inputElement}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                />
                </div>
            <div className={styles.formElement} >
            <label className={styles.formLabels} htmlFor="password"> Genera Tu Clave Secreta
            </label>
                <input
                className={styles.inputElement}
                id="password"
                name="password"
                type="password"
                placeholder="Clave"
                />
                </div>
            <button className={styles.submitBTN} type="submit">Siguiente Paso!</button>
            </form>
            <img 
                className={styles.imageFiller}
                src="./assets/farmPics/earlySprouts.jpg"
                alt="Early sprouting plants"
                />
            </div>
        </div>
        </>             
        )
    }

console.log(user)

    const UserStepTwo=()=>{
        return(
            <>
                <div className={styles.StepTwoGenCont} >
                    <div className={styles.stepTwoIntro} >
                        <div className={styles.rotatingLogoCont} >
                        <img 
                            className={styles.plantIcon}
                            alt="Sprout Icono with surrounding spinning arrows"
                            src="./assets/logoAndVar/sproutIcon-LghtGreen.png"
                            />
                        <img 
                            className={styles.iconSpinner}
                            alt="Spinning Arrows"
                            src="./assets/logoAndVar/rotationDeco-blk.png"
                            />
                        </div>
                    </div>
                        <div className={styles.introSupra} > Nuestra comunidad digital esta diseñada para que puedas compartir, aprender y explorar todo sobre tu huerto en casa!  </div>
                        <div className={styles.introTitle}> Solo nos falta un par de detalles:
                        </div>
                    <div>
                    </div>
                    <RegistrationDetails />
                        <img
                            className={styles.imgfillerTwo} 
                            alt="Rucola spouts in a farm"
                            src="./assets/fillerImgs/babySprout.jpg"
                            />
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
            <> 
                <div className={styles.generalSignpCont} >
                    {profileStep==="one"&&
                    <>{UserStepOne()}</>}
                    {profileStep==="two"&&
                    <>{UserStepTwo()}</>}

                </div>
            </>}
            {processStatus==="process"&&
                <> <CircularProgress/> </>} 
            </>}
        </>
    )
}