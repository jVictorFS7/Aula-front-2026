import Table from "../components/Table_Faltas";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Faltas() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Histórico de Faltas por Semestre</h2>
        <section>
          <Table />
        </section>
      </main>
    </>
  );
}

export default Faltas;
