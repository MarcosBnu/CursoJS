import {Link} from 'react-router-dom';
import './style.css';


function Header() {
    return (
      <header>
        <h1>Sujeissssssto programador</h1>
        <div>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
      </header>
    );
  }
  
export default Header;