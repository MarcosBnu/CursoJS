import {useEffect, useState} from  'react'
import {useParams, useNavigate} from 'react-router-dom'
import {toast, Toats} from 'react-toastify';
import api from '../../services/api'
import './filme-info.css'

function Filmes() {

    const {id}=useParams();
    const [filme, setFilmes]= useState({});
    const [loading, setLoading]=useState(true);

    const navigate = useNavigate();

    useEffect(()=>{

      async function loadFilme(){
        await api.get(`/movie/${id}?`, {
          params:{
            api_key: "27359448340448b2e627bc38c5522a77",
            language:"pt-BR",
          }
        })
        .then((response)=>{
          setFilmes(response.data);
          setLoading(false)
        })
        .catch(()=>{
          console.log("FILME NÂO ENCONTRADO");
          navigate("/", { replace: true})
          return;
        })
      }
      loadFilme();

    }, [navigate, id])
    function salvarFilme(){

      const minhaLista=localStorage.getItem("@primeflix");

      let filmesSalvos= JSON.parse(minhaLista) || [];

      const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id===filme.id);

      if(hasFilme){
        toast.warn("Filme ja esta na lista");
        return
      }
      else{
        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("FILME SALVO COM SUCESSO")
      }
    }


    if (loading){
      return(
        <div className='loading'>
            <h2>Carregando filme...</h2>
        </div>
      )
    }

    return (
      <div className='filme-info'>
        <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title}/>
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
        <strong>Avaliação: {filme.vote_average} / 10</strong>

        <div className='area-buttons'>
          <button onClick={salvarFilme}>Salvar</button>
          <button>
            <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.title}`}>
              Trailer
            </a>
          </button>


        </div>
      </div>
    );
  }
  
  export default Filmes;
  