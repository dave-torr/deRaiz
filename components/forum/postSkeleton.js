import { StepLabel } from "@material-ui/core"
import { useState } from "react"
import styles from "./../../styles/components/forumPosts.module.css"
function APost(props){
    const [visDiv, setVisDiv]=useState(styles.hiddenComments);

    let postContent= props.aPost
    let complimetnaryTags = postContent.supplementaryTags.map((elems)=><>| {elems} |</>)
    let PostComments = postContent.postComments.map((elems)=>
        <> 
            <div>
                <p className={styles.commentName} >
                   {elems.user} </p>
                <p className={styles.commentContent} >
                   {elems.comment} </p>
            </div>
        </>)
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
                <div className={styles.postDeco}></div>
                <div className={styles.postDeco2}></div>
                <div className={styles.postBody} >
                <pre className={styles.postBodyContent} >
                    {postContent.postBody}
                    </pre>
                </div>
                <div className={styles.commentCont} >
                    {visDiv===styles.hiddenComments?
                    <> Ver Cometarios! </> :
                    <> Colapsar cometarios! </>}
                    <div className={visDiv} >
                        {PostComments} 
                        </div>
                </div>
            </div>
            <div className={styles.postUtils} >
                <div className={styles.postLinkeCounts} > 
                    {postContent.postLikes.length} <br></br> likes </div>
                <div className={styles.postSaveBtn} > 
                    save <br></br> content </div>
                <div className={styles.postCommentCount} > 
                    {postContent.postComments.length} <br></br> comments </div>
            </div>
        </div>
        </>
    )
} export {APost}