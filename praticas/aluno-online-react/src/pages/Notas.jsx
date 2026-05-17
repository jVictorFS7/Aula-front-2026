import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Notas() {

  const titulos = [
    "Disciplina",
    "Nota",
    "Faltas"
  ];

  const dados1 = [
    {
      disciplina: "Frontend",
      nota: 9,
      faltas: 2
    },
    {
      disciplina: "Devops",
      nota: 8,
      faltas: 1
    }
  ];

  const dados2 = [
    {
      disciplina: "Banco de Dados",
      nota: 10,
      faltas: 0
    },
    {
      disciplina: "UX/UI",
      nota: 7,
      faltas: 3
    }
  ];

  return (
    <>
      <h1>Minhas Notas</h1>

      <h2>Histórico de Notas por Semestre</h2>

      <Tabela
        titulos={titulos}
        dados={dados1}
      />

      <Tabela
        titulos={titulos}
        dados={dados2}
      />
    </>
  );
}

export default Notas;
