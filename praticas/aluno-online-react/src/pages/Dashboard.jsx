import Card from "../components/Card";
import Sidebar from '../components/Sidebar';
import Topbar from "../components/Topbar";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Bem-vindo ao portal do aluno</h2>
        <section>
          <Card />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
