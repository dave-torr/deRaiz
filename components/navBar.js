import {LogInOut} from "./userAuth/signIn"
import styles from "./../styles/components/navBar.module.css"
import { Popover } from '@material-ui/core';
import { useUser } from "../utils/userHook"


const Navbar =()=> {
  return(
  <>
  <nav>
    <a style={{color: "black" }} href="./assets/pdfs/sepCatalog.pdf" 
    download>
    <p style={{fontWeight: "600", margin: "unset", marginTop: "6px" }}> 
    ¡Descarga nuestro catálogo en P F D aqui!
    </p>
    </a>
  </nav>
    
    <br></br>
    <br></br>
  <style jsx>{`
  nav{
      font-family: 'Poiret One', cursive;
      position: fixed;
      justify-content: center;
      display:flex;
      top: 0px;
      width: 100%;
      letter-spacing: 1px;
      z-index: 2;
      height: 30px;
      background-color: rgb(153, 153, 102);
      box-shadow: 3px 3px 10px rgba(114, 112, 112, 0.986);
    }

    a{
      text-decoration: none;
    }

    a:hover{
      text-decoration: underline;
      cursor: pointer;
    }
    h3{
      font-size: 1em
    }

    
    `}</style>
  </>
  )
};

export {Navbar};
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



let logoGreen = "./assets/logoAndVar/fontface-lghtGrn.png";

function Nav2(){
  const [user, { mutate }] = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {setAnchorEl(event.currentTarget)};
  const handleClose = () => {setAnchorEl(null)};

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return(
    <>
      <div className={styles.NaviTwoGenCont} >
        <div className={styles.AuthBtn}
          onClick={handleClick}>
          {user?
          <> Hola {user.name} </>
          : <> Iniciar Sesión </> }
        </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
       >
        <LogInOut/>
      </Popover>
      </div>
    </>
  )
}; export {Nav2};