import Table from "../components/Table_Faltas";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Faltas({faltas}) {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Histórico de Faltas por Semestre</h2>
        <section>
          <Table faltas={faltas} />
        </section>
      </main>
    </>
  );
}

export default Faltas;
