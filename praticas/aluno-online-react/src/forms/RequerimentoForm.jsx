import {Link, useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import "./RequerimentoForm.css";
import { criar } from "../services/requerimentoService";

function RequerimentoForm(){
        
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const salvar = async (dados) => {
        await criar(dados);
        navigate("/requerimentos");
    }

<<<<<<< HEAD
    export default RequerimentoForm;

=======
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
                <select id="tipo_requerimento" name="tipo_requerimento" {...register("tipo_requerimento", regras.opcoes)}>
                    <option value=""> </option>
                    <option value="Trancamento de curso">Trancamento de curso</option>
                    <option value="Aproveitamento de disciplinas">Aproveitamento de disciplinas</option>
                    <option value="Certificado de conclusão">Certificado de conclusão</option>
                    <option value="Histórico escolar">Histórico escolar</option>
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
                <input type="date" id="data" name="data" {...register("data")}/>
            </div>
            <Link to="/">Desistir</Link>
            <button type="submit">Salvar</button>
        </form>
    </>
    )
}

export default RequerimentoForm;
>>>>>>> 652c19a56310d7197d32f4aaab768d1a7ca1ad9c
