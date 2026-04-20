import Requerimentos from "../components/Requerimentos";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Requerimento({requerimentos}) {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Meus Requerimentos</h2>
        <h3>Faça Solicitações Online para a Secretaria</h3>
        <section>
          <Requerimentos requerimentos={requerimentos} />
        </section>
      </main>
    </>
  );
}

export default Requerimento;
