import { useState } from "react"
import {UserCommentModal} from "./forumDialogues"
import styles from "./../../styles/components/forumPosts.module.css"
function APost(props){
    const [visDiv, setVisDiv]=useState(styles.hiddenComments);

    let postContent= props.aPost
    let complimetnaryTags = postContent.supplementaryTags.map((elems, i)=><div key={i} >| {elems} |</div>)

    let reducedPost = postContent.postBody.toString().slice(0, 150)
    const [fullPost, setfullPost]=useState(reducedPost);
    let PostComments = postContent.postComments.map((elems, i)=>
        <> 
            <div key={i} >
                <p className={styles.commentName} >
                   {elems.user} </p>
                <p className={styles.commentContent} >
                   {elems.comment} </p>
            </div>
        </>)

    const [modalOpen, setModalOpen]= useState(false)
    const commentUserInput=()=>{
        if(props.user){
            setModalOpen(true);
        } else {
            // execute sign in / sign up popover
        }
    }

    return(
        <>
        <div className={styles.postGenCont} >
            <div className={styles.postContent}>
                <div className={styles.postHead} >
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
                    </div>
                <div className={styles.postDeco}></div>
                <div className={styles.postDeco2}></div>
                <div className={styles.postBody} >
                <pre className={styles.postBodyContent} >
                    {fullPost} {fullPost===reducedPost&&<> . . . </>}                    
                    </pre>
                </div>
                <div className={styles.bodyExpander} 
                onClick={()=>{
                    if(fullPost===postContent.postBody){
                        setfullPost(reducedPost) 
                    } else if (fullPost===reducedPost){
                        setfullPost(postContent.postBody) 
                    }}}>
                    {fullPost===postContent.postBody?
                    <> Colapsar publicación </>:
                    <> Ver Publicación Completa! </>}  
                </div>
                <div className={styles.commentCont} >
                    <div className={styles.commentExpander} 
                        onClick={()=>{
                            if(visDiv===styles.hiddenComments){
                                setVisDiv(styles.displayedComments)
                            } else if (visDiv===styles.displayedComments){
                                setVisDiv(styles.hiddenComments)
                            }}}>
                        <div className={styles.commentTrigger}>
                        {visDiv===styles.hiddenComments?
                        <> Ver Cometarios! </> :
                        <> Colapsar cometarios! </>}
                        </div> </div>
                    <div className={visDiv} >
                        {PostComments} 
                        </div>
                    <div className={styles.addCommentBTN} 
                        onClick={()=>{
                            {commentUserInput()}
                        }}> 
                    Añadir Comentario! </div>
                    <UserCommentModal
                        user={props.user}
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        postTitle={postContent.postName}
                    />    
                </div>
            </div>
            <div className={styles.postUtils} >
                <div className={styles.postLinkeCounts} > 
                    {postContent.postLikes.length} <br></br> likes </div>
                <div className={styles.postSaveBtn} > 
                    save <br></br> content </div>
                <div className={styles.postCommentCount} > 
                    {postContent.postComments.length} <br></br> commentarios </div>
            </div>
        </div>
        </>
    )
} export {APost}