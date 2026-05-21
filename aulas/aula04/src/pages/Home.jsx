import { useEffect, useState } from "react";

function Home() {

  const [carregando, setCarregando] = useState(true);

  const [tarefas, setTarefas] = useState([]);

  const carregaDados = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setTarefas([
      {id:1, nome: "Fazer o trabalho", status: "aberta"},
      {id:2, nome: "Estudar API REST", status: "aberta"},
      {id:3, nome: "Entregas as práticas", status: "pendente"},
      {id:4, nome: "Revisar o conteúdo", status: "pendente"},
      {id:5, nome: "Assistir video-aulas", status: "concluída"},
    ]);
  }

useEffect(() => {
  const disparar = async () => {await carregaDados(); setCarregando(false)};
  disparar();
}, [])

  return (
    <>
      <h1>Página Inicial</h1>
      <h2>Minhas Tarefas do Dia</h2>
      {carregando ?(
        <p>Aguarde...</p>
      ):(
      <table>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Tarefa
            </th>
            <th>
              Status
            </th>
        </tr>
        </thead>
        {tarefas.map((item,index) => (
          <tr key={index}>
            <td>
              {item.id}
            </td>
            <td>
              {item.nome}
            </td>
            <td>
              {item.status}
            </td>
          </tr>
        ))}
      </table>
      )}
    </>
  );
}

export default Home;
