import Tabela from "../components/Table_Faltas";

function Faltas(){

    const faltas = [
        {
            disciplina: "Frontend",
            falta: 2,
            presenca: "95%"
        },
        {
            disciplina: "Devops",
            falta: 4,
            presenca: "90%"
        },
        {
            disciplina: "Banco de Dados",
            falta: 1,
            presenca: "98%"
        }
    ];

    return (
        <>
            <h1>Minhas Faltas</h1>
            <h2>Histórico de Faltas por Semestre</h2>
            <Tabela faltas={faltas} />
        </>
    );
}

export default Faltas;