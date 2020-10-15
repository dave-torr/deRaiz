import { useRouter } from 'next/router'

export default function IconProfilePicker(){
    const router = useRouter()
    console.log(router)

    const routerHist=()=>{
        if(router.back()==="/register"){
            
        }
    }

    return(<>
    </>)
}
 