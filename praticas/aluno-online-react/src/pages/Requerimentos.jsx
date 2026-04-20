import Requerimentos from "../components/Requerimentos";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

<<<<<<< HEAD
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
=======
function Requerimentos({requerimentos}) {

          <Table requerimentos={requerimentos}/>

>>>>>>> dafb7dfac45c1c47914341f202683408ca235b9d
        </section>
      </main>
    </>
  )
}

export default Requerimento;
