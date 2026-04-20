import "./Table_Faltas.css";
function Table({faltas}){
<<<<<<< HEAD
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
=======
            {faltas.map((falta, index) => (
          <tr key={index}>
            <td>{falta.disciplina}</td>
            <td>{falta.falta}</td>
            <td>{falta.presenca}</td>
          </tr>
            ))}       
>>>>>>> dafb7dfac45c1c47914341f202683408ca235b9d
        </tbody>
    </table>    
    )    
}
export default Table;