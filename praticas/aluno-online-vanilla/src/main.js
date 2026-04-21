import './style.css';

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const botao = document.querySelector("button");

botao.addEventListener("click", function (e){
    e.preventDefault();
  const emailErro = document.querySelector("#emailErro");
  const senhaErro = document.querySelector("#senhaErro");

  emailErro.textContent = '';
  senhaErro.textContent = '';

  if (email.value == "") {
    emailErro.textContent = "O campo email é obrigatório";
    return;
  }

  if (senha.value == "") {
    senhaErro.textContent = "O campo de senha é obrigatório";
    return;
  }
});