import { useNavigate } from 'react-router';
import './BotaoSubmit.css'
import { useAuthContext } from '../context/AuthContext';

function BotaoSubmit({ children }) {

  // const navigate = useNavigate();

  //   const {login} = useAuthContext();

  //   const handleEntrar = () => {
  //      login({usuario:"joao@iesb.edu.br", senha:"123456"});
  //      navigate("/"); 
  //   }

  return (
    <>
      <button type="submit">{children}</button>
    </>
  );
}

export default BotaoSubmit;
