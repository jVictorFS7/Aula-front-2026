import "./App.css";
import logo from './assets/learn.svg'

function Cabecalho(){
  return(
    <header>
      <h1>Título</h1>
    </header>
  )
};

// Prettier => ALT + SHIFT + F
function App() {

  //   <div>
  //     <Cabecalho />
  //     <div>{2 + 2}</div>
  //     <img src={logo} alt="" />
  //     <p></p>
  //   </div>
  //

  return (
    <main>
      <img src={logo} alt="Logotipo da aplicação" />
      <h1>Aluno Online</h1>
      <label htmlfor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label hatmlfor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main> 
  )
}

export default App;
