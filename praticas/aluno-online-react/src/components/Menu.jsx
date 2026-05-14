import { Link, NavLink } from "react-router";

function Menu(){
    return (
        <nav>
            <ul>
                <li><NavLink to="/dashboard" className={({isActive}) => isActive ? "ativo" : "" }>Dashboard</NavLink></li>
                <li><NavLink  to="/notas" className={({isActive}) => isActive ? "ativo" : "" }>Notas</NavLink></li>
                <li><NavLink  to="/faltas" className={({isActive}) => isActive ? "ativo" : "" }>Faltas</NavLink></li>
                <li><NavLink  to="/boletos" className={({isActive}) => isActive ? "ativo" : "" }>Boletos</NavLink></li>
                <li><NavLink  to="/requerimentos" className={({isActive}) => isActive ? "ativo" : "" }>Requerimentos</NavLink></li>
                <li><Link>Sair</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;