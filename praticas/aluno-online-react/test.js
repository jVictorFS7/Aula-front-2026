import { criar, obter, listar, modificar, remover } from "../aluno-online-react/src/services/requerimentoService";

async function main(){
    let Requerimento = {};

    let resposta = await criar (Requerimento);
    console.log("Requerimento criado...", resposta);

    resposta= await listar();
    console.log("Requerimento listado...", resposta);

    resposta = await obter(resposta[0]);
    console.log("Requerimento consultado...", resposta);

    resposta = await modificar();
    console.log("Requerimento atualizado...", resposta);

    resposta = await remover(resposta);
    console.log("Requerimento removido...", resposta);
}

main();