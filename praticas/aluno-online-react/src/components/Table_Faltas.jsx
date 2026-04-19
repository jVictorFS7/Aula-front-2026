import "./Table_Faltas.css";

function Table({faltas}){
    return (
    
    <table>
        <caption>2026.1</caption>
        <thead>
            <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
            </tr>
        </thead>
        <tbody>
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