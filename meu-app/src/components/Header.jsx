import "./Header.css"
import {Link} from "react-router-dom"

function Headers(){
    return(
    <nav>
        <Link to={"/"} >Home</Link>
        <Link to={"Contatos"} >Contato</Link>
    </nav>            
        ) 

}
export default Headers