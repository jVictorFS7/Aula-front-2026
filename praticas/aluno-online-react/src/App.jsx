import { Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import Layout from './layouts/layout';
import Login from './pages/Login';
import Erro404 from './pages/Erro404';
// import { useAuthContext } from './context/AuthContext';

function App(){
  // const {logado} = useAuthContext();
  return (
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/faltas" element={<Faltas />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/boletos" element={<Boletos />} />
          <Route path="/requerimentos" element={<Requerimentos />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Erro404 />} />
      </Routes >
    ) 

}
export default App;