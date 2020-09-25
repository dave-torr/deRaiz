import styles from "./../../styles/components/forumPosts.module.css"
function APost(props){
    let postContent= props.aPost
    console.log(postContent)

    let complimetnaryTags = postContent.supplementaryTags.map((elems)=>
    <>| {elems} |</>)

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
                        {complimetnaryTags}
                    </div>

                </div>
                <div className={styles.postUtils} >
                    <div className={styles.postLinkeCounts} > 
                        like <br></br> counts </div>
                    <div className={styles.postSaveBtn} > 
                        save <br></br> content </div>
                </div>
            </div>
        </>
    )
} export {APost}