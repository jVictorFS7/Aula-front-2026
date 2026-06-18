const url = 'http://localhost:3000/requerimentos';

const logout = () => {
    localStorage.removeItem("app:token");
  };

function getAuthHeader() {
  const tokenStorage = JSON.parse(localStorage.getItem("app:token"));
  const token = tokenStorage?.token;

  if (!token) {
    logout();
    throw new Error("401 Unauthorized");
  }

  return {
    Authorization: `Bearer ${token}`
  };
}
async function criar(requerimento){
    try{
    const resposta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(requerimento),
        headers: {

            "content-type": "application/json",
            ...getAuthHeader()
        }
    });
    if (resposta.status === 401) {
            logout();
            throw new Error("401 Unauthorized");
        }
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
    const resposta = await fetch(url,{
        headers: {
            ...getAuthHeader()
        }
    });

    if (resposta.status === 401) {
            logout();
            throw new Error("401 Unauthorized");
    }
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
        method: "DELETE"
    });
    const dados = await resposta.json();
    return dados;
    }catch(error){
        console.log("Deu ruim: ", error.message)
    }
}

export {criar, obter, listar, modificar, remover};