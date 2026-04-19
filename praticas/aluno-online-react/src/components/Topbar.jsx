import "./Topbar.css";
import avatar from "../assets/avatar.svg";

function Topbar() {
  return (
    <header>
      <h1>Olá, Aluno</h1>
      <img src={avatar} alt="Imagem avatar" />
    </header>
  );
}

export default Topbar;
