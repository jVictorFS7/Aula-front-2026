import { Link, NavLink } from "react-router";
import { useAuthContext } from "../context/AuthContext";

function Menu(){

<<<<<<< HEAD
    const {usuario, logout} = useAuthContext();

    const handleSair = () =>{
=======
    const {logout} = useAuthContext();

    const Sair = () => {
>>>>>>> a5c2f2601c03c88a97693674e8807f79926af95f
        logout();
    }

    return (
        <nav>
            <h4>{usuario.nome}</h4>
            <h5>{usuario.email}</h5>
            <ul>
                <li><NavLink to="/dashboard" className={({isActive}) => isActive ? "ativo" : "" }>Dashboard</NavLink></li>
                <li><NavLink  to="/notas" className={({isActive}) => isActive ? "ativo" : "" }>Notas</NavLink></li>
                <li><NavLink  to="/faltas" className={({isActive}) => isActive ? "ativo" : "" }>Faltas</NavLink></li>
                <li><NavLink  to="/boletos" className={({isActive}) => isActive ? "ativo" : "" }>Boletos</NavLink></li>
                <li><NavLink  to="/requerimentos" className={({isActive}) => isActive ? "ativo" : "" }>Requerimentos</NavLink></li>
<<<<<<< HEAD
                <li><Link to="/" onClick={handleSair}>Sair</Link></li>
=======
                <li><Link to="/" onClick={Sair}>Sair</Link></li>
>>>>>>> a5c2f2601c03c88a97693674e8807f79926af95f
            </ul>
        </nav>
    )
}

export default Menu;