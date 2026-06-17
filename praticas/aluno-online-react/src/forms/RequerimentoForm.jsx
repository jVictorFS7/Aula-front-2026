    import {Link} from "react-router";
    import {useForm} from "react-hook-form";
    import "./RequerimentoForm.css";

    function RequerimentoForm(){
        
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const salvar = (data) => console.log(data);

        const regras = {
            opcoes: {
                required: "O Tipo de requerimento é obrigatório",
            },
            descricao: {
                required: "A descrição é obrigatória",
                minLength: {
                    value: 5,
                    message: "A descrição deve ter no mínimo 5 caracteres"
                }
            }
        };

        return (
        <>
            <h1>Novo Requerimento</h1>
            <form id="form_requerimento" onSubmit={handleSubmit(salvar)}>
                <div>
                    <label htmlFor="tipo_requerimento">Tipo de Requerimento</label>
                    <select id="tipo_requerimento" name="tipo_requerimento" {...register("opcoes", regras.opcoes)}>
                        <option value=""> </option>
                        <option value="tipo1">Trancamento de curso</option>
                        <option value="tipo2">Aproveitamento de disciplinas</option>
                        <option value="tipo3">Certificado de conclusão</option>
                        <option value="tipo4">Histórico escolar</option>
                    </select>
                    {errors?.opcoes && <p>{errors.opcoes.message}</p>}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" {...register("descricao", regras.descricao)}></textarea>
                    {errors?.descricao && <p>{errors.descricao.message}</p>}
                </div>
                <div>
                    <label htmlFor="data" >Data do Requerimento</label>
                    <input type="date" id="data" name="data"/>
                </div>
                <Link to="/">Desistir</Link>
                <button type="submit">Salvar</button>
            </form>
        </>
        )
    }

    export default RequerimentoForm;

