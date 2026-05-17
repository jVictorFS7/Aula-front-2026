import Card from "../components/Card";

function Dashboard() {

    const avisos = [
        "Eleição para representante",
        "Participe do IESB-SE"
    ];

    const datas = [
        "23/04 - Avaliação P1",
        "04/05 - Transferência de curso",
        "07/06 - Renovação de matrícula"
    ];

    const disciplinas = [
        "Construção de Frontend",
        "Devops",
        "BI e Data Warehousing"
    ];

    return (
        <>
            <Card
                titulo="Mural de Avisos"
                itens={avisos}
            />
            <Card
                titulo="Calendário Acadêmico"
                itens={datas}
            />
            <Card
                titulo="Minhas Disciplinas"
                itens={disciplinas}
            />
        </>
    );
}
export default Dashboard;