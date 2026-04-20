import Card from "../components/Card";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";
function Dashboard({cards}) {
<<<<<<< HEAD
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Bem-vindo ao portal do aluno</h2>
        <section>
          <Card cards={cards} />
=======
          <Card cards={cards}/>
>>>>>>> dafb7dfac45c1c47914341f202683408ca235b9d
        </section>
      </main>
    </>
  )
}

export default Dashboard;
