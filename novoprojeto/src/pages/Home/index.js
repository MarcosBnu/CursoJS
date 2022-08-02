import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Hosssme</h1>
        <span>Sujeito</span>
        <br></br>
        <Link to='/sobre'>Sobre</Link>
      </div>
    );
  }
  
export default Home;