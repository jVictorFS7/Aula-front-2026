import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Layout from "./Layout";

function Notas() {
  return (
    <Layout 
      titulo="Minhas Notas" 
      subtitulo="Histórico de Notas por Semestre">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Notas;
