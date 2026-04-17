import Table from "../components/Requerimentos";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Requerimentos() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Meus Requerimentos</h2>
        <h3>Faça Solicitações Online para a Secretaria</h3>
        <section>
          <Table />
        </section>
      </main>
    </>
  );
}

export default Requerimentos;
