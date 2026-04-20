import "./Table_Boletos.css";
function Table({boletos}){
<<<<<<< HEAD
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
=======
            {boletos.map((boleto, index) => (
          <tr key={index}>
            <td>{boleto.vencimento}</td>
            <td>{boleto.valor}</td>
            <td>{boleto.situacao}</td>
          </tr>
            ))}            
>>>>>>> dafb7dfac45c1c47914341f202683408ca235b9d
        </tbody>
    </table>    
    )   
}

export default Table;