

function Tabela(titulos, dados){
    return (
    
    <table>
        <thead>
            <tr>
                {titulos.map(
                    (item, index) =>
                        <td key={index}>{item}</td>
                )}
            </tr>
        </thead>
        <tbody>
            {dados.map((item, index) => (
                <tr key={index}>
                   {Object.values(item).map((valor, index) => (
                    <td key={index}>{valor}</td>
                   ))}                   
                </tr>

            ))}

            <tr>
                <td>Valor 1</td>
                <td>Valor 2</td>
                <td>Valor 3</td>
            </tr>
            <tr>
                <td>Valor 1</td>
                <td>Valor 2</td>
                <td>Valor 3</td>
            </tr>
            <tr>
                <td>Valor 1</td>
                <td>Valor 2</td>
                <td>Valor 3</td>
            </tr>
        </tbody>
    </table>

    );
}

export default Tabela;