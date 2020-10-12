//Forum
//Tags, and filtered Q&A, initial question deposit, comments and 
//TEMPORATY TESTS FOR NAV BAR:
import { useState } from "react"
import { useUser } from "../utils/userHook"
import {Nav2} from "../components/navBar"
import {APost} from "../components/forum/postSkeleton"
import {AddForumPost} from "../components/forum/addPost"
import {SignInPopTwo} from "../components/userAuth/signInPopver"
import styles from "./../styles/forumVivus.module.css"

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

import samplePosts from "../data/forum.json";

export default function ForumVivus(){
    const [user, { mutate }] = useUser();
    const [displayedPosts, setDisplayedPosts ] = useState(samplePosts);
    const [postFilter, setPostFilter]= useState("latest");
    const [postSort, setPostSort]= useState("postTimestamp");    
    const [postTheme, setPostTheme]= useState("Huerto en Tierra");    
    const [addPostController, setAddPostController]=useState(false)


    const IntroSec=()=>{
        return(
            <>
            <div className={styles.IntroCont} >
                <img className={styles.IconOne} alt="icon green" src="./assets/logoAndVar/icon-lightGrn.png" />
                    <div className={styles.IntroTitle} > FORO <p style={{fontSize:"0.5em"}} > &#9752; </p> VIVO </div>
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

    const AddPostModal=()=>{
        return(
            <>
            <AddForumPost 
                addPostController={addPostController}
                setAddPostController={setAddPostController}
                user={user}
                themeDisplayer={themeDisplayer}
                />
            </>
        )
    }

    const addPostBtn=()=>{
        if(user){
            return(
                <div className={styles.addPostBtn}
                onClick={()=>{setAddPostController(true)}}
                > Añadir nuevo foro </div>
            )
        } else if (!user){
            return(
            <div className={styles.addPostBtn2}>
                Para dejar un comentario, inicia una sesion!
                {/* login/signUp popover */}
            </div>
            )
        }
    }

    return(
        <>
        <Nav2/>
        <div style={{minHeight: "140vh"}} >
            {IntroSec()}
            {PostPicker()}
            {postFilter==="theme"&&
            <>
            {themeDisplayer()}
            </>}
            {ForumContainer()}
            {AddPostModal()}
            {addPostBtn()}
        </div> 
        </>
    )
}