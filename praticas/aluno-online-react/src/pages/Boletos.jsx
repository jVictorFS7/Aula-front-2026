import Table from "../components/Table_Boletos";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Boletos({boletos}) {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Histórico de Pagamentos</h2>
        <section>
          <Table boletos={boletos} />
        </section>
      </main>
    </>
  )
}

export default Boletos;
