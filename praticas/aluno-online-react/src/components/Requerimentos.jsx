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