import Link  from "next/link"
import { useEffect } from "react"
import styles from "./../../styles/components/profileComponents.module.css"

export default function ProductsAndSub(props){

    //useEffect call to Backend to get data with SWR

    const postBECall=()=>{
        // props.SavedPosts using post _id to search for post content
    }

    const generalForumCont =()=>{
        return(
            <>
            <div className={styles.generalForumCont} style={{borderTop:"solid 4px yellow", borderLeft:"solid 4px yellow"}} >
                <div className={styles.forumTitle} > Productos & Subscripciones!
                </div>
                {props.SavedPosts>0? 
                    <> 
                        {postSummary()}
                    </> : <>
                        <div className={styles.thePostsPlaceholder} >
                            <div className={styles.postsPlaceholder} > no has registrado tus productos o subscripciones!
                            </div>
                            <div className={styles.forumLinkIntro} > 
                            Mira nuestro catalogo aqui:
                            </div>
                            <div className={styles.forumLink} > <Link href="/cociTwo" > 
                            PRODUCTOS</Link> </div>

                        </div>
                    </>}
            </div>
            </>
        )
    }

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