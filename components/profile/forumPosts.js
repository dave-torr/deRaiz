import Link  from "next/link"
import { useEffect } from "react"
import styles from "./../../styles/components/profileComponents.module.css"

export default function ForumPosts(props){

    //useEffect call to Backend to get data with SWR

    const postBECall=()=>{
        // props.SavedPosts using post _id to search for post content
    }

    const generalForumCont =()=>{
        return(
            <>
            <div className={styles.generalForumCont} style={{borderTop:"solid 2px teal", borderLeft:"solid 2px teal"}}>
                <div className={styles.profileSecTitle} >
                    &#9752; 
                    <br></br>
                    Publicaciones 
                    <br></br>
                    Guadadas
                </div>
                {props.SavedPosts>0? 
                    <> 
                        {postSummary()}
                    </> : <>
                        <div className={styles.thePostsPlaceholder} >
                            <div className={styles.postsPlaceholder} > No has guardado ninguna publicación hasta ahora!
                            </div>
                            <iframe src="https://giphy.com/embed/54Y3bemAMQTpWzozrX" width="480" frameBorder="0" class="giphy-embed" sandbox></iframe><p><a href="https://giphy.com/gifs/motion-graphics-design-54Y3bemAMQTpWzozrX">via GIPHY</a></p>
                            <div className={styles.forumLinkIntro} > 
                            Visita nuestro Foro para conocer más!
                            </div>
                            <div className={styles.forumLink} > <Link href="/foroVivo" > 
                            FORO VIVO</Link> </div>
                        </div>
                    </>}
            </div>
            </>
        )
    }

    const postSummary=()=>{
        let threePosts=props.SavedPosts.splice(3)

        let postSum=threePosts.map((eachPost, i)=>
            <div className={styles.aPostCont} > 
                <div className={styles.postTag}> {eachPost.postTag}</div>
                <div className={styles.postTitle}> {eachPost.postTitle}</div>
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