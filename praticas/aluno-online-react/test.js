import { criar, obter, listar, modificar, remover } from "./client.js";

async function main(){
    let produto = {nome: "banana", preco: 12.50, unidade: "kg"};

    let resposta = await criar (produto);
    console.log("Produto criado...", resposta);

    resposta= await listar();
    console.log("Produtos listado...", resposta);

    resposta = await obter(resposta[0]);
    console.log("Produto consultado...", resposta);

    resposta = await modificar({id:resposta.id, nome:"banana nanica", preco: 19.99, unidade: "kg"});
    console.log("Produto atualizado...", resposta);

    resposta = await remover(resposta);
    console.log("Produto removido...", resposta);
}

main();