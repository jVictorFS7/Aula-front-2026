import Tabela from '../components/Table_Boletos';

function Boletos(){

    const colunas = [
        "Vencimento",
        "Valor",
        "Situação"
    ];

    const boletos = [
        {vencimento: "01/04/26", valor: 500, situacao: "Pago"},
        {vencimento: "01/05/26", valor: 500, situacao: "A vencer"},
        {vencimento: "01/06/26", valor: 500, situacao: "A vencer"},
        {vencimento: "01/07/26", valor: 500, situacao: "A vencer"},
        {vencimento: "01/08/26", valor: 500, situacao: "A vencer"}
    ];

    return (
        <> 
            <h1>Meus Boletos </h1>
            <h2>Histórico de Pagamentos</h2>
            <Tabela boletos={boletos}/>
        </>
    )
}

export default Boletos;
