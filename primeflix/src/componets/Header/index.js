import { Link } from 'react-router-dom'
import './header.css'

function Header(){
    return(
        <header>
            <h1>ddd</h1>
            <Link className="logo" to="/">Prime Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus favoritos</Link>
        </header>
    )
}

export default Header;