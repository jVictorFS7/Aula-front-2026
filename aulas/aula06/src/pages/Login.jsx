import {useForm} from 'react-hook-form';
import { useAuthContext } from '../contexts/AuthContext';
import { useState } from 'react';
import {useNavigate} from 'react-router';

function Login(){

    const {login} = useAuthContext();
    const [erro, setErro] = useState();
    const navigate = useNavigate();
    const{register, handleSubmit, reset} = useForm();

    const entrar = async (dados) => {
        //aqui preciso chamar API para autenticar;
        try{
            await login(dados);
            reset(); // limpa formulário
            setErro(""); // limpa mensagem de erro
            navigate("/produtos"); // navega
        }catch(error){
            setErro(error.message);
        }
    }

    return (
    <>
    <h1>Login</h1>
    <p>{erro}</p>
    <form onSubmit={handleSubmit(entrar)}>
        <input type="email" placeholder="E-mail" {...register("email")}/>
        <input type="password" placeholder="Senha" {...register("senha")}/>
        <button type="submit">Entrar</button>
    </form>
    </>
    )
}

export default Login;