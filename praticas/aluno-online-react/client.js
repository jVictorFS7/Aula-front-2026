const url = 'http://localhost:5174/requerimentos';

async function criar(requerimento){
    try{
    const resposta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(requerimento),
        headers: {
            "content-type": "application/json"
        }
    });
    const dados = await resposta.json();
    return dados;
    }catch(error){
        console.log("Deu ruim: ", error.message)
    }
}

async function obter(requerimento){
    // por padrão o método é GET, não é necessário declarar o método.
    try{
    const resposta = await fetch(`${url}/${requerimento.id}`);
    const dados = await resposta.json();
    return dados;
    }catch(error){
        console.log("Deu ruim: ", error.message)
    }
}

async function listar(){
    try{
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados;
    }catch(error){
        console.log("Deu ruim: ", error.message)
    }
}

async function modificar(requerimento){
    try{
    const resposta = await fetch(`${url}/${requerimento.id}`, {
        method: "PUT",
        body: JSON.stringify(requerimento),
        headers: {
            "content-type": "application/json"
        }
    });
    const dados = await resposta.json();
    return dados;
    }catch(error){
        console.log("Deu ruim: ", error.message)
    }
}

async function remover(requerimento){
    try{
    const resposta = await fetch(`${url}/${requerimento.id}`,{
        mehotd: "DELETE"
    });
    const dados = await resposta.json();
    return dados;
    }catch(error){
        console.log("Deu ruim: ", error.message)
    }
}

export {criar, obter, listar, modificar, remover};