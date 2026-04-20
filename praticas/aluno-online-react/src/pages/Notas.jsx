import Table from "../components/Table_Notas";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Notas({notas}) {
<<<<<<< HEAD
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Histórico de Notas por Semestre</h2>
        <section>
          <Table notas={notas} />
=======

          <Table notas={notas}/>
>>>>>>> dafb7dfac45c1c47914341f202683408ca235b9d
        </section>
      </main>
    </>
  )
}

export default Notas;
