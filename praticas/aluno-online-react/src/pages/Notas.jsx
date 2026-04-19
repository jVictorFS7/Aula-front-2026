import Table from "../components/Table_Notas";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Notas({notas}) {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Histórico de Notas por Semestre</h2>
        <section>
          <Table notas={notas} />
        </section>
      </main>
    </>
  );
}

export default Notas;
