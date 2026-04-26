import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';

function App(){
  const pagina = 1;

  const boletos = [
    { vencimento: "19/01/26", valor: "500", situacao: "Pago" },
    { vencimento: "19/02/26", valor: "300", situacao: "Em Atraso" },
    { vencimento: "19/03/26", valor: "700", situacao: "Pago" }
  ];

  const notas = [
    {disciplina: "BI e DATA Warehousing", mencao: "SR"},
    {disciplina: "Construção de Frontend", mencao: "SR"},
    {disciplina: "Manutenção de Software e DevOps", mencao: "SR"}
  ]

  const faltas = [
    {disciplina: "BI e DATA Warehousing", falta: "0", presenca: "100%"},
    {disciplina: "Construção de Frontend", falta: "0", presenca: "100%"},
    {disciplina: "Manutenção de Software e DevOps", falta: "0", presenca: "100%"}
  ]

  const requerimentos = [
    {tipo: "Revisão de Mensão", data: "15/12/25", situacao: "Indeferido"},
    {tipo: "Dispensa de Disciplina", data: "12/06/25", situacao: "Indeferido"},
    {tipo: "Trancamento de Matrícula", data: "05/01/24", situacao: "Deferido"},
    {tipo: "Mudança de Turno", data: "10/10/23", situacao: "Deferido"},
    {tipo: "Renovação de Mantrícula", data: "20/02/23", situacao: "Deferido"},
  ]

  const cards = [
    {
      titulo: "Mural de Avisos",
      itens: [
        "Inscrição para o projeto de extensão",
        "Eleição para representante"
      ]
    },
    {
      titulo: "Calendário Acadêmico",
      itens: [
        "23/02 - Início do período letivo 2026-1",
        "Prazo final para aplicação da P1",
        "Prazo final para a aplicação da P2",
        "Fim do período letivo 2026-1"
      ]
    },
    {
      titulo: "Minhas Disciplinas",
      itens: [
        "BI e Data Warehousing",
        "Construção Frontend",
        "Manutenção de Software e DevOps"
      ]
    }
  ];

  return (
    <>
      {pagina == 1 && <Dashboard cards={cards} />}
      {pagina == 2 && <Notas notas={notas} />}
      {pagina == 3 && <Faltas faltas={faltas} />}
      {pagina == 4 && <Boletos boletos={boletos} />}
      {pagina == 5 && <Requerimentos requerimentos={requerimentos} />}
  
    </>
  )
}

export default App;