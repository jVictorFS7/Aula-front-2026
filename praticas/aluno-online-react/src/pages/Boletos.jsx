import Tabela from '../components/Tabela';
import Layout from './Layout';

function Boletos(){

    const colunas = [
        "Vencimento",
        "Valor",
        "Situação"
    ];

    const boletos = [
        {Vencimento: "01/04/26", valor: 500, situacao: "Pago"},
        {Vencimento: "01/05/26", valor: 500, situacao: "A vencer"},
        {Vencimento: "01/06/26", valor: 500, situacao: "A vencer"},
        {Vencimento: "01/07/26", valor: 500, situacao: "A vencer"},
        {Vencimento: "01/08/26", valor: 500, situacao: "A vencer"}
    ];

    return (
        <Layout 
            titulo="Meus Boletos" 
            subtitulo="Histórico de Pagamentos">
            <Tabela titulos={colunas} dados={boletos}/>
        </Layout>
    )
}

export default Boletos;
