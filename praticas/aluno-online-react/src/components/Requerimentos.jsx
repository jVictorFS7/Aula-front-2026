function Requerimentos({requerimentos}){
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
            <tbody>
                {requerimentos.map((requerimento, index) => (
                <tr key={index}>
                    <td>{requerimento.tipo}</td>
                    <td>{requerimento.data}</td>
                    <td>{requerimento.situacao}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </article>
    
    )
    
}

export default Requerimentos;
