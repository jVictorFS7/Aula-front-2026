import "./Table_Notas.css";
function Table_Notas({notas}){
            {notas.map((nota, index) => (
          <tr key={index}>
            <td>{nota.disciplina}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{nota.mencao}</td>
          </tr>
            ))}
        </tbody>
    </table>    
    )    
}

export default Table_Notas;