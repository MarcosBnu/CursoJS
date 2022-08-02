import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filmes from './pages/Filmes';


function routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:id" element={<Filmes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default routes;