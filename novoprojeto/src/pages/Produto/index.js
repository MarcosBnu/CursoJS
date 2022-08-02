import {useParams} from 'react-router-dom';

function Produto() {
    const {id}=useParams();
    return (
        <div>
            <h1>Produto é {id}</h1>
        </div>
    );
  }
  
export default Produto;