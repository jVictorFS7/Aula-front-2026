import {useEffect, useState} from "react";
import { Link } from "react-router";
import {listar} from "../services/requerimentoService";

function Requerimentos(){

    const [dados, setDados] = useState([]);

    useEffect(()=>{

        const disparar = async () =>{
            const resposta = await listar();
            setDados(resposta);
        }

        disparar();
    }, []);

    return <>
        <main>
            <h1>Meus Requerimentos</h1>
            <h2>Faça solicitações online para a secretaria</h2>
            <table>
            <thead>
                <tr>
                    <th>Requerimento</th>
                    <th>Descrição</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                    {dados.map((item) => (
                    <tr key={item.id}>
                        <td>{item.tipo_requerimento}</td>
                        <td>{item.descricao}</td>
                        <td>{item.data}</td>
                        <td>
                            <Link to={`/requerimentos/editar/${item.id}`}>Editar</Link>
                            <Link to="/requerimentos">Remover</Link>
                        </td>            
                    </tr>
         ))}</tbody>
        </table>
        </main>
    </>
}

export default Requerimentos;
