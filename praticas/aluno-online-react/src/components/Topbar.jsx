import avatar from "../assets/avatar.svg";
import { useAuthContext } from "../context/AuthContext";

function Topbar() {

  const {usuario} = useAuthContext();

  return (
    <header>
      <h1>Olá, {usuario.nome}</h1>
      <img src={avatar} alt="Imagem avatar" />
    </header>
  );
}

export default Topbar;
