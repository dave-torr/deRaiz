import Head from "next/head";
import { useUser } from "../../utils/userHook"
import {Nav2} from "../../components/navBar"
import Footer from "../../components/footer"
import ForumPosts from "./../../components/profile/forumPosts"
import Recipies from "./../../components/profile/recipies"
import ProductsAndSub from "./../../components/profile/productos"

import styles from "./../../styles/userProfile.module.css"
import { useEffect } from "react";
import { useRouter } from 'next/router'


export default function Perfil(){
  const [user] = useUser();
  const router = useRouter()
  const {
    name, email, products, profilePic, savedPublications, likedPublications, userType, alias, forumPosts, savedRecipies, ownedProducts, 
  } = user || {};

     useEffect(() => {
      if (!user) router.push('/registro')
    }, [user]);

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
        {user.profilePic? 
        <>
          <img 
            src={user.profilePic}
            className={styles.profilePic}
            />
          </>: <> <h2> No has subido una imagen todavia! </h2> 
            </>}
            </div>
          <div className={styles.ProfileHeadTexts} > 
            <div className={styles.dRAizLogo} >
              <img 
                src="./assets/logoAndVar/fontface-blk.png"
                className={styles.userLogo}
                />
              </div>
            <div className={styles.userIntro} >
              <div className={styles.profTextAlias}> {alias} </div>
              <div className={styles.profTextName}> {name} </div>
              <div className={styles.profTextUserType}> {userType} </div>
            </div>
            <div className={styles.prfileOptions} >
              <div className={styles.profLink} > Opciones de perfil </div>
              <div className={styles.profLink} > <a href="mailto:draiz.info@gmail.com" > Reporta un Inconveniente </a> </div>
            </div>
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
          <div className={styles.userCards}>
            <ForumPosts 
              SavedPosts={savedPublications}
            />
            <Recipies />
            <ProductsAndSub />

            </div>
        </div>
            <Footer />
        </>
    )
}