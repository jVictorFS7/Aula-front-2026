import Table from "../components/Table_Faltas";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";
function Faltas({faltas}) {
<<<<<<< HEAD
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Histórico de Faltas por Semestre</h2>
        <section>
          <Table faltas={faltas} />
=======
          <Table faltas={faltas}/>
>>>>>>> dafb7dfac45c1c47914341f202683408ca235b9d
        </section>
      </main>
    </>
  )
}

export default Faltas;
