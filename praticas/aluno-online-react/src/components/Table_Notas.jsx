import "./Table_Notas.css";

function Table_Notas({notas}){
    return (

    <table>
        <caption>2026.1</caption>
        <thead>
            <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
            </tr>
        </thead>
        <tbody>
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