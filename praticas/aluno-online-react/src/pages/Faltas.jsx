import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Layout from './Layout';

function Faltas(){
    return (
    <Layout 
        titulo="Minhas Faltas" 
        subtitulo="Histórico de Faltas por Semestre">
        <Tabela />
    </Layout>
    );
}

export default Faltas;