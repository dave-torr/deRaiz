import Dialog from '@material-ui/core/Dialog';
import { useState } from 'react';
import { CircularProgress, StylesProvider } from '@material-ui/core';

import styles from "./../../styles/components/forumSubmit.module.css"

function AddForumPost(props){
  const [aUserComment, setaUserComment] = useState()
  const [modalOpenTwo, setmodalOpenTwo]= useState(false)
  const [spinner, setSpinner]= useState("stale")
  const [errorMsg, setErrorMsg] = useState('');


    return(
        <> 
        <Dialog fullScreen open={props.addPostController} >
            <div className={styles.GenPostContainer} >
            <div className={styles.postSubmitIntro}>
            <img 
                src="./assets/logoAndVar/fontface-blk.png"
                className={styles.logoBlk}
            />
            </div>

            {props.themeDisplayer()}

            </div>
        </Dialog>
        </>
    )
} export {AddForumPost}