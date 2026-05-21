import { Navigate, Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import Layout from './layouts/layout';
<<<<<<< HEAD
import Login from './pages/Login';
import Erro404 from './pages/Erro404';
// import { useAuthContext } from './context/AuthContext';

function App(){
  // const {logado} = useAuthContext();
=======
import { useAuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Erro404 from './pages/Erro404';


function App(){
  const {autenticado} = useAuthContext();
>>>>>>> a5c2f2601c03c88a97693674e8807f79926af95f
  return (
      <Routes>
        {autenticado ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="notas" element={<Notas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos" element={<Requerimentos />} />
        </Route>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Erro404 />} />
      </Routes >
=======
        ):(
          <>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />}
          />
        </> 
        )}
          <Route path="*" element={<Erro404 />} />
    </Routes>
>>>>>>> a5c2f2601c03c88a97693674e8807f79926af95f
    ) 
}
export default App;