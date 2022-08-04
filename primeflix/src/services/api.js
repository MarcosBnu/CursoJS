//Base da URL: https://api.themoviedb.org/3
//URL DA API: /movie/550?api_key=27359448340448b2e627bc38c5522a77

import axios from 'axios';

const api= axios.create({baseURL: 'https://api.themoviedb.org/3'});

export default api