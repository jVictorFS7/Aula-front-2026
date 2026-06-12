import { useEffect, useState } from "react";
import { listar } from "../services/requerimentoService";

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
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Data</th>
                </tr>
                <tbody>
                    {dados.map((item) => (
                    <tr key={item.id}>
                        <td>{item.tipo}</td>
                        <td>{item.descricao}</td>
                        <td>{item.data}</td>       
                    </tr>
                ))}</tbody>
            </thead>
        </table>
        </main>
    </>
}

export default Requerimentos;
