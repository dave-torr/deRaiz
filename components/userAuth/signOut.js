import { useUser } from "../../utils/userHook"
import styles from "./../../styles/components/misc.module.css"

function LogOut(){
const [user, { mutate }] = useUser();


    const LogOut=()=>{
        return(
            <>
                {user&&<>
                <button className={styles.logOutBTN} onClick={()=>handleLogout()} > 
                LOG OUT </button> </>}
            </>
        )
    }

    const handleLogout= async ()=>{
        await fetch("/api/userAuth", {
            method: "DELETE",
            });
        mutate(null)
    }

    return(
        <>
            {LogOut()}
        </>
    )
}; export { LogOut }