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
    const [postFilter, setPostFilter]= useState("latest");
    const [postSort, setPostSort]= useState("postTimestamp");    
    const [postTheme, setPostTheme]= useState("Huerto en Tierra");    
    
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

    let postType;
    const ForumContainer=()=>{
        // if(samplePosts){
        //     if(postFilter){

        //     }
        // }

        let postsDisplay= displayedPosts.map((eachPost, i)=>
        <div key={i} >
            <APost
                aPost={eachPost}
                user={user}
                /> 
                </div>
                )

        return(
            <>
                <div className={styles.forumGenContainer} >
                {postsDisplay}
                </div>
            </>
        )
    }
    const PostPicker=()=>{
        let recentPosts=styles.postPickers
        let lovedPosts=styles.postPickers
        let themePosts=styles.postPickers
        if(postFilter==="latest"){
            recentPosts=styles.postPickersActive
        } else if (postFilter==="loved"){
            lovedPosts=styles.postPickersActive
        } else if (postFilter==="theme"){
            themePosts=styles.postPickersActive
        }

        return(
            <>
            <div className={styles.postPickerContainer}>
                <div className={recentPosts} 
                    onClick={()=> setPostFilter("latest")}> 
                Más Recientes </div>
                <div className={lovedPosts} 
                    onClick={()=> setPostFilter("loved")}> 
                Más Apreciadas </div>
                <div className={themePosts} 
                    onClick={()=> setPostFilter("theme")}> 
                
                Temas </div>
            </div>
            </>
        )
    }

    const themeDisplayer=()=>{
    if(postFilter==="theme"){
        let eachTheme=forumTags.map((eachTag, i)=>
        <> <option key={i} value={eachTag} > {eachTag} </option> </>)
        return(
            <>
            <div className={styles.themePickerCont} >
                <div className={styles.pickerText} >
                    Escoge tu tema de interés:
                    </div>
                <select className={styles.themePicker} 
                onChange={(e)=>{
                    setPostTheme(e.target.value)
                }}>
                    {eachTheme}
                    </select>
            </div>
            </>
            )
        }
    }

    return(
        <>
        <Nav2/>
        <div style={{minHeight: "140vh"}} >
            {IntroSec()}
            {PostPicker()}
            {themeDisplayer()}
            {ForumContainer()}
        </div> 
        </>
    )
}