import Table from "../components/Table_Notas";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Histórico de Notas por Semestre</h2>
        <section>
          <Table />
        </section>
      </main>
    </>
  );
}

export default Notas;
