import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { CircularProgress } from '@material-ui/core';
import { useState } from 'react';


import styles from "./../../styles/components/forumDalogues.module.css"

function UserCommentModal(props){
  const [aUserComment, setaUserComment] = useState()
  const [modalOpenTwo, setmodalOpenTwo]= useState(false)
  const [spinner, setSpinner]= useState("stale")
  const [errorMsg, setErrorMsg] = useState('');

  const handleClose = () => {
      props.setModalOpen(false);
    };
  const handleCloseTwo = () => {
      setmodalOpenTwo(false);
      setSpinner("stale")
    };

  const UserAuthstep =()=>{      
    props.setModalOpen(false);
    setmodalOpenTwo(true);
    }

  const addcommentary= async(e)=>{
    e.preventDefault();
    handleClose()
    setSpinner("process")
    const modalAuthBody = {
      email: props.user.email,
      password: e.currentTarget.password.value
      }
    const res = await fetch('/api/userAuth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(modalAuthBody),
      });      
    if (res.status === 401){
        setErrorMsg('Email o clave incorrecta. Por favor inténtalo otra vez!')
      } else if (res.status === 200) {
        console.log(aUserComment)
        setSpinner("received")
        {/* submit comment to DB*/}
        
      }      
    }

  const modalOne=()=>{
    return(
      <>
        <Dialog open={props.modalOpen} onClose={handleClose}>
          <div className={styles.dialogue1Title}>Déjanos tu comentario!</div>
          <DialogContent>
          <div>
            <div className={styles.dialogueExplainer} >
              Todos los comentarios iran con tu "alias". No olvides de respetar nuestras <strong>politicas de comunidad</strong> al momento de hacer un comentario!
              </div>
            <div className={styles.postSubraTitle} >Tema:</div>
            <div className={styles.postTitle} >{props.postTitle}</div>
            <div style={{marginLeft: "10%", marginTop: "3%"}} > 
              Comentarios:
              </div>
            <textarea
              onChange={(e)=>{ setaUserComment(e.target.value)}}
              className={styles.inputOne}
              autoFocus
              type="text" />
          </div>
          </DialogContent>
          <DialogActions>
            <div onClick={handleClose} className={styles.dialogueOneBtn} >
              Cancelar
            </div>
            <div onClick={UserAuthstep} className={styles.dialogueOneBtn} >
              Enviar Comentario
            </div>
          </DialogActions>
        </Dialog>      
      </>
    )
  }
  const modalTwo=()=>{
    return(
      <>
        <Dialog open={modalOpenTwo} onClose={handleCloseTwo}>
        {spinner==="stale"&&<> 
          <DialogContent>
          <form onSubmit={(e)=>addcommentary(e)}  >
            <div style={{textAlign: "center", fontWeight: "600", marginBottom: "21px" }} >
                Por favor dijitar su clave de D´Raiz.org para confirmar tu mensaje.
            </div>
            <div>
              <label htmlFor="modalPasswordConfirmation" > 
                D´Raiz.org:</label><br></br>
                {errorMsg&& <> {errorMsg} </> }
              <input 
                required
                id="password"
                type="password"
                name="password"
                placeholder="Clave Personal"
                />
            </div>
            <div className={styles.modalTwoBtns} >
            <div onClick={()=>setmodalOpenTwo(false)} className={styles.dialogueOneBtn} >
              Cancelar
            </div>
            <input
              type="submit" 
              className={styles.dialogueOneBtn} 
              value="Confirmar Clave"
              />
            </div>
          </form>
          </DialogContent>
        </>}
        {spinner==="process"&&<> 
          <div style={{margin: "33px" }} >
            <CircularProgress />
          </div> </>}

        {spinner==="received"&&<> 
          <div style={{margin: "33px",  fontSize: "1.3em" }} >
            Comentario Recibido! 
          </div> 
            <div onClick={()=>setmodalOpenTwo(false)} className={styles.dialogueOneBtn} >
              Salir
            </div>
          </>}



        </Dialog>
      </>
    )
  }
    return(
    <>
      {modalOne()}
      {modalTwo()}
    </>
    )
} export {UserCommentModal};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function SingInUpModal(props){

} export {SingInUpModal};

