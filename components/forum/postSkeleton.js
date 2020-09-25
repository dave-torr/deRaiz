import { StepLabel } from "@material-ui/core"
import styles from "./../../styles/components/forumPosts.module.css"
function APost(props){
    let postContent= props.aPost



    let complimetnaryTags = postContent.supplementaryTags.map((elems)=><>| {elems} |</>)
    console.log(postContent)
    return(
        <>
            <div className={styles.postGenCont} >
                <div className={styles.postContent}>

                    <div className={styles.mainTag} >
                        {postContent.mainTag}
                        </div>
                    <div className={styles.postName} > 
                        {postContent.postName}
                        </div>
                    <div className={styles.postCompTags} >
                        Etiquetas Adicionales:
                        <br></br>
                        {complimetnaryTags}
                    </div>
                    <div className={styles.postBody} >
                        <pre>
                        {postContent.postBody}
                        </pre>

                    </div>


                </div>
                <div className={styles.postUtils} >
                    <div className={styles.postLinkeCounts} > 
                        6 <br></br> likes </div>
                    <div className={styles.postSaveBtn} > 
                        save <br></br> content </div>
                    <div className={styles.postCommentCount} > 
                        {postContent.postComments.length} <br></br> comments </div>
                </div>
            </div>
  
  <style jsx>{`
    pre{
        width: 70%;
        word-wrap: normal;
    }
    `}</style>
        </>
    )
} export {APost}