import { useState, useEffect } from 'react';


function App() {
  
  const[nutri, setNutri]= useState([]);

  useEffect(()=>{
    function loadApi(){
      let url='https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)//Faz a requisição http
      .then((r)=> r.json())
      .then((json)=>{
        setNutri(json);
      })
    }
    loadApi();
  }, [])
  return (
    <div className="App">
      <h1>Teste</h1>
      {nutri.map((item)=>{
        if(item.id%2==0){
          return(
          <article key={item.id}>
            <srong className="titulo">{item.titulo}</srong>
            <br></br>
            <img src={item.capa} alt={item.titulo}></img>
            <p>{item.subtitulo}</p>
            <br></br><br></br><br></br><br></br>
          </article>
        );
        }
      })}
    </div>
  );
}

export default App;
