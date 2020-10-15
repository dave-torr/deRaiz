import Link  from "next/link"
import { useEffect } from "react"
import styles from "./../../styles/components/profileComponents.module.css"

export default function Recipies(props){

    //useEffect call to Backend to get data with SWR

    const postBECall=()=>{
        // props.SavedPosts using post _id to search for post content
    }

    const generalForumCont =()=>{
        return(
            <>
            <div className={styles.generalForumCont} style={{borderTop:"solid 3px orange", borderLeft:"solid 3px orange"}}>
                <div className={styles.forumTitle} > Recetas Favoritas
                </div>
                {props.SavedPosts>0? 
                    <> 
                        {postSummary()}
                    </> : <>
                        <div className={styles.thePostsPlaceholder} >
                            <div className={styles.postsPlaceholder} > No has guardado ninguna receta hasta ahora!
                            </div>
                            <div className={styles.forumLinkIntro} > 
                            Visita nuestro recetario para explorar deliciosos sabores!
                            </div>
                            <div className={styles.forumLink} > <Link href="/cociTwo" > 
                            COCI LIBER</Link> </div>

                        </div>
                    </>}
            </div>
            </>
        )
    }

    //specializedPost sommary for each card. Where is the problem with db on deployment. something with the middleware??

    const postSummary=()=>{
        let threePosts=props.recipieArray.splice(3)

        let postSum=threePosts.map((eachPost, i)=>
            <div className={styles.aPostCont} > 
                <div className={styles.postTag}> {eachPost.recipieTag}</div>
                <div className={styles.postTitle}> {eachPost.recipieName}</div>
            </div>)
        return(
            <>
            <div className={styles.thePosts} >
                {postSum} 
            </div>
            </>
        )
    }
    
    return(
        <>
        {generalForumCont()}
        </>
    )
}