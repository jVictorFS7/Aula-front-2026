import "./Table_Boletos.css";
function Table({boletos}){
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