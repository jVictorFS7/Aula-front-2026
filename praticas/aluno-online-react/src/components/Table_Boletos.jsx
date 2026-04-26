import "./Table_Boletos.css";
function Table({boletos}){
    return (
    
    <table>
        <thead>
            <tr>
                <th>Vencimento</th>
                <th>Valor R$</th>
                <th>Situação</th>
            </tr>
        </thead>
        <tbody>
            {boletos.map((boleto, index) => (
            <tr key={index}>
                <td>{boleto.vencimento}</td>
                <td>{boleto.valor}</td>
                <td>{boleto.situacao}</td>
            </tr>
            ))}
        </tbody>
    </table>    
    )   
}

export default Table;