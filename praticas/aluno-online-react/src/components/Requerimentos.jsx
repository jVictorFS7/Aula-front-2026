function Table({requerimentos}){
    return (
    
    <article>
        <table>
            <thead>
                <tr>
                    <th>Tipo de Requerimento</th>
                    <th>Data de Solicitação</th>
                    <th>Situação</th>
                </tr>
            </thead>
        </table>
        <tbody>
            {requerimentos.map((requerimento, index) => (
          <tr key={index}>
            <td>{requerimento.tipo}</td>
            <td>{requerimento.data}</td>
            <td>{requerimento.situacao}</td>
          </tr>
            ))}
        </tbody>
    </article>
    
    )
    
}

export default Table;