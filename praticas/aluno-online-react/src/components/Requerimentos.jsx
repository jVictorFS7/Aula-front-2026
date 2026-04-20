<<<<<<< HEAD
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
=======
function Table({requerimentos}){
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
>>>>>>> dafb7dfac45c1c47914341f202683408ca235b9d
