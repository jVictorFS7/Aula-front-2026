    import { useState } from 'react';
    import InputEmail from '../components/InputEmail';
    import InputSenha from '../components/InputSenha';
    import BotaoSubmit from '../components/BotaoSubmit';
    import { useAuthContext } from '../context/AuthContext';
    import { useNavigate } from 'react-router';

    function FormLogin(){

        const {login} = useAuthContext();

        const navigate = useNavigate();

        const handleEntrar = () => {
            login({usuario:"joao@iesb.edu.br", senha:"123456"});
            navigate("/"); 
        }

        const [email, setEmail] = useState();
        const [senha, setSenha] = useState();
        const [EmailErro, setEmailErro] = useState();
        const [senhaErro, setSenhaErro] = useState();

        const trataSubmit = (e) => {
            e.preventDefault();
    
            if (!email) {
            setEmailErro("O campo de e-mail é obrigatório");
            }

            if (!senha) {
            setSenhaErro("O campo de senha é obrigatório");
            }

            if (
            email === "joao@iesb.edu.br" &&
            senha === "123"
            ) {

            login();

            navigate('/');

            } else {

            setSenhaErro("Usuário ou senha inválidos");

            }

        }

        const mudaEmail = (e) => {
            setEmail(e.target.value);
            setEmailErro('');
        };
        const mudaSenha = (e) => {
            setSenha(e.target.value);
            setSenhaErro('');
        };

        return (
            <form onSubmit={trataSubmit}>
                <InputEmail valor={email} erro={EmailErro} mudaValor={mudaEmail} />
                <InputSenha valor={senha} erro={senhaErro} mudaValor={mudaSenha} />
                <BotaoSubmit onCLick={handleEntrar}>Entrar</BotaoSubmit>
            </form>
        )
    }

    export default FormLogin;
