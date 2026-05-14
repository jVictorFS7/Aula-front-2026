import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function Login(){

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleEntrar = () => {
       login({usuario:"joao@iesb.edu.br", senha:"123456"});
    }

    return <>
        <h1>Login</h1>
        <button onClick={handleEntrar}>Entrar</button>
    </>; 
};

export default Login;