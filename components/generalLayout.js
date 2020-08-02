import Navbar from "./navBar.js";
import Footer from "./footer.js";

const GeneralLayout =(props)=>(
    <>
    {/* <Navbar/> */}
    {props.children}
    <Footer />
    </>
)

export {GeneralLayout};
