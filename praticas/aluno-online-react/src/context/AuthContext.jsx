import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}){
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
            { children }
        </AuthContext.Provider>
    )
}

function useAuthContext(){
    return useContext(AuthContext);
}

export {useAuthContext, AuthProvider};