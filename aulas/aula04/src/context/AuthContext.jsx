import { createContext, useState } from "react";

//cria o contexto
const AuthContext = createContext();

//cria o provedor
function AuthProvider({children}){
    const  [logado, setLogado] = useState(false);

    const [usuario, setUsuario] = useState({});

    const login = (dados) => {
        // chamar API passando dados
        setUsuario({id:0, nome:"Jose", email:"jose@iesb.edu.br"});
        setLogado(true);
    }

    const logout = () =>{
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{logado, usuario, login, logout}}>
            {/*value = estado compartilhadao*/}
            { children }
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};