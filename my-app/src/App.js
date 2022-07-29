import { useState } from 'react'
function App() {
  const [aluno, setAluno] = useState('')
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
    alert("Registrou")
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
      <h2>Ola: {aluno}, sua idade é: {idade} , e seu email é: {Email} </h2>
    </div>
  );
}

export default App;

function Nome({aluno}){
  return(
    <span>Bem vindo {aluno}</span>
  )
}