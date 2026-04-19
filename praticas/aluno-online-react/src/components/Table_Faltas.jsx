import "./Table_Faltas.css";
function Table({faltas}){
            {faltas.map((falta, index) => (
          <tr key={index}>
            <td>{falta.disciplina}</td>
            <td>{falta.falta}</td>
            <td>{falta.presenca}</td>
          </tr>
            ))}       
        </tbody>
    </table>    
    )    
}
export default Table;