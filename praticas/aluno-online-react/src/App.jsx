import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Notas from './pages/Notas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';

function App(){
  const pagina = 2;

  return (
    <>
      {pagina == 1 && <Dashboard />}
      {pagina == 2 && <Faltas />}
      {pagina == 3 && <Notas />}
      {pagina == 4 && <Boletos />}
      {pagina == 5 && <Requerimentos />}
    </>
  )
}

export default App;