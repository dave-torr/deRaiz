import Navbar from "./navBar.js";
import {Footer} from "./Footer.js";

const GeneralLayout =(props)=>(
    <>
    <Navbar/>
    {props.children}
    <Footer />
    </>
)

export {GeneralLayout};
