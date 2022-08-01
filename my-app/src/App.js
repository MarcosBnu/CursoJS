import { useState, useEffect } from 'react'
function App() {
  let [input, setInput]=useState('');
  let [terafas, setTarefas]=useState(['Pagar a cota', "Comer"]);
  const [aluno, setAluno] = useState('')

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(terafas))
  }, [terafas]);


  function Trocandonome(nome){
    setAluno(nome);
  }

  const [idade, setIdade] = useState('')
  function Trocandonome(idade){
    setIdade(idade);
  }

  const [Email, setEmail] = useState('')
  function Trocandonome(email){
    setEmail(email);
  }

  function registrar(e){
    e.preventDefault();
    setTarefas([...terafas, input])
    alert("Registrou")
  }

  function adicionarlista(e, valorr){
    e.preventDefault()
    setTarefas=[...setTarefas, ]
  }

  return (
    <div className="App">
      <h1>Bem vindo ao meu projeto</h1>
      <h2><Nome aluno="Marcos"></Nome></h2>
      <h2>Ola: {aluno}</h2>
      <button onClick={ () => Trocandonome('nome aleatorio')}>
        mudar nome
      </button>
      <br></br><br></br><br></br><br></br>

      <form onSubmit={registrar}>
        <label>Nome: </label>
        <input 
        value={aluno}
        onChange={(e)=> setAluno(e.target.value)}
        placeholder='Digite seu nome'></input>
        
        <br></br><br></br>

        <label>Idade: </label>
        <input
        value={idade}
        onChange={(e)=> setIdade(e.target.value)}
        placeholder='Digite sua idade'></input>
        <br></br><br></br>


        <label>Email: </label>
        <input 
        value={Email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Digite seu email'></input>


        <br></br><br></br>
        <button type="submit">Registrar</button>
      </form>
      <br></br><br></br><br></br><br></br>
      <form onSubmit={registrar}>
        <label>Lista: </label>
        <input
        placeholder='Digite seu nome'
        value={input}
        onChange={ (e)=>setInput(e.target.value)}>
        </input>
        <br></br><br></br>
        <button type="submit">Registrar</button>
      </form>
      <br></br><br></br><br></br><br></br>
      <ul>
      <h2>Ola: {aluno}, sua idade é: {idade} , e seu email é: {Email} </h2>
          {terafas.map(tarefas => (
            <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

function Nome({aluno}){
  return(
    <span>Bem vindo {aluno}</span>
  )
}