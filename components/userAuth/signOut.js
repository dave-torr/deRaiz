import { useUser } from "../../utils/userHook"

function LogOut(){
const [user, { mutate }] = useUser();


    const LogOut=()=>{
        return(
            <>
                <button onClick={()=>handleLogout()} > LOG OUT  </button>
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