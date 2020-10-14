import Head from "next/head";
import { useUser } from "../../utils/userHook"
import {Nav2} from "../../components/navBar"

import styles from "./../../styles/userProfile.module.css"


export default function ProfilePage(){
  const [user] = useUser();
  console.log(user)
  const {
    name, email, products, profilePic, savedPublications, likedPublications, userType, alias, forumPosts, savedRecipies, ownedProducts, 
  } = user || {};

const SignInSplash=()=>{
  //D´raiz logo, and sing in invitation, or sign up button.
  return(
    <>
        <Nav2 />
        <p>Please sign in</p>
    </>
  )
}

const profileHeader=()=>{
  return(
    <>
      <div className={styles.profileHeader}> 
      <div  className={styles.profilePicCont} >
        <img 
          src={user.profilePic}
          className={styles.profilePic}
          />
          </div>
        <div className={styles.ProfileHeadTexts} > 
          <div className={styles.profTextAlias}> {alias} </div>
          <div className={styles.profTextName}> {name} </div>
          <div className={styles.profTextUserType}> {userType} </div>
        </div>
      </div>
    </>
  )
}

  if (!user) {
    return (<> {SignInSplash()} </>);
  }
    return(
        <>
        <Head>
            <title>{name}- Perfil - D´Raiz.org </title>
        </Head>
        <div className={styles.profilePageGen} >
          <div className={styles.profileGenCont}>
          {profileHeader()}

          </div>
        </div>
        </>
    )
}