<<<<<<< HEAD
=======
/* eslint-disable react-refresh/only-export-components */

>>>>>>> a5c2f2601c03c88a97693674e8807f79926af95f
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}){
<<<<<<< HEAD
    const  [logado, setLogado] = useState(false);

    const [usuario, setUsuario] = useState({});

    const login = (dados) => {
        setUsuario({id:0, nome:"joao", email:"joao@iesb.edu.br"});
        setLogado(true);
    }

    const logout = () =>{
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{logado, usuario, login, logout}}>
=======
    const  [autenticado, setAutenticado] = useState(false);

    const [usuario, setUsuario] = useState({});

    const login = () => {
        setUsuario({id:0, nome:"João Victor", email:"joao@iesb.edu.br"});
        setAutenticado(true);
    }

    const logout = () =>{
        setAutenticado(false);
        setUsuario({});
    }

    return (
        <AuthContext.Provider value={{autenticado, usuario, login, logout}}>
>>>>>>> a5c2f2601c03c88a97693674e8807f79926af95f
            { children }
        </AuthContext.Provider>
    )
}

function useAuthContext(){
    return useContext(AuthContext);
}

export {useAuthContext, AuthProvider};