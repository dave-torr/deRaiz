//Forum
//Tags, and filtered Q&A, initial question deposit, comments and 
//TEMPORATY TESTS FOR NAV BAR:
import {Nav2} from "./../components/navBar"
import {APost} from "./../components/forum/postSkeleton"

import styles from "./../styles/forumVivus.module.css"
import { useUser } from "../utils/userHook"

let forumTags=[
    "Huerto en Tierra",
    "Huerto Hidropónico",
    "Hortalizas",
    "Frutales",
    "Plagas y Enfermedades",
    "Practicas Agroecológicas",
    "Sustratos",
    "Soluciones Hidropónicas",
    "Abono Orgánico",
    "Macetas y áreas de crecimiento"
    ]

import samplePosts from "./../data/forum.json";
import { useState } from "react"

export default function ForumVivus(){
    const [user, { mutate }] = useUser();
    const [displayedPosts, setDisplayedPosts ] = useState(samplePosts);
    
    console.log(displayedPosts)

    const IntroSec=()=>{
        return(
            <>
            <div className={styles.IntroCont} >
                <img className={styles.IconOne} alt="icon green" src="./assets/logoAndVar/icon-lightGrn.png" />
                    <div className={styles.IntroTitle} > FORUM <p style={{fontSize:"0.5em"}} > &#9752; </p> VIVUS </div>
                    <div className={styles.IntroSubtitle} > 
                    Tu espacio de discusión <br></br> 
                    aprendizaje, e ideas <br></br> de tus huertos en casa <br></br> 
                    <p className={styles.arrowDeco}>
                    &#8609; 
                    </p>
                </div>
            </div>
            </>
        )
    }

    const ForumContainer=()=>{

        let postsDisplay= displayedPosts.map((eachPost)=>
            <APost
                aPost={eachPost}
                />)

        return(
            <>
                <div className={styles.forumGenContainer} >
                {postsDisplay}
                </div>
            </>
        )
    }

    return(
        <>
        <Nav2/>
        <div style={{minHeight: "140vh"}} >
            {IntroSec()}
            {ForumContainer()}
        </div> 
        </>
    )
}