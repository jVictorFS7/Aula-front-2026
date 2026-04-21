import logo from '../assets/learn.svg';
import FormLogin from '../forms/FormLogin';
import '../components/Login.css'

function Login() {

  return <>
    <main>
      <img src={logo} alt="Imagem do Logo" />
      <h1>Aluno Online</h1>
      <FormLogin />
    </main>
    <p id="copyright">© 2026. Todos os direitos reservados.</p>
  </>;
  
}

export default Login;
