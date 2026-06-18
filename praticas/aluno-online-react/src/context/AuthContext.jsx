/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}){
    const  [autenticado, setAutenticado] = useState(true);

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
            { children }
        </AuthContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
function useAuthContext(){
    return useContext(AuthContext);
}

export {useAuthContext, AuthProvider};