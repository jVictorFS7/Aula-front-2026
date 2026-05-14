import './InputCampos.css'

function InputSenha({erro, mudaValor}){
    return <>
        <fieldset>
            <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" 
                onChange={mudaValor}
                />
            <p>{erro}</p>
        </fieldset>
    </>;
}

export default InputSenha;