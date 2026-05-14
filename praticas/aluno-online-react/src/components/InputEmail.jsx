import './InputCampos.css'

function InputEmail({erro, mudaValor}){
    return (
        <>
            <fieldset>
                <label htmlFor= "email">E-mail</label>
                <input type="email" id="email" name="email"
                onChange={mudaValor} />
            <p>{erro}</p>
            </fieldset>
        </>
    )
}

export default InputEmail;