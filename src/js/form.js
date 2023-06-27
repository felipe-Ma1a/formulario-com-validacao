const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validarInputsVermelhos();
});

form.addEventListener("change", function () {
  validarInputsVerdes();
});

const colocarBordaVermelha = function (element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".erro");

  errorDisplay.innerText = message;
  inputControl.classList.add("obrigatorio");
  inputControl.classList.remove("preenchido");
};

const colocarBordaVerde = function (element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".erro");

  errorDisplay.innerText = "";
  inputControl.classList.add("preenchido");
  inputControl.classList.remove("obrigatorio");
};

const validarInputsVermelhos = function () {
  const valorNome = nome.value.trim();
  const valorEmail = email.value.trim();
  const valorTelefone = telefone.value.trim();
  const valorMensagem = mensagem.value.trim();

  if (valorNome === "") {
    colocarBordaVermelha(nome, "campo obrigatório");
  }

  if (valorEmail === "") {
    colocarBordaVermelha(email, "campo obrigatório");
  }

  if (valorTelefone === "") {
    colocarBordaVermelha(telefone, "campo obrigatório");
  }

  if (valorMensagem === "") {
    colocarBordaVermelha(mensagem, "campo obrigatório");
  }

  if (document.querySelectorAll(".preenchido").length === 4) {
    form.submit();
  }
};

const validarInputsVerdes = function () {
  const valorNome = nome.value.trim();
  const valorEmail = email.value.trim();
  const valorTelefone = telefone.value.trim();
  const valorMensagem = mensagem.value.trim();

  if (valorNome !== "") {
    colocarBordaVerde(nome);
  }

  if (valorEmail !== "") {
    colocarBordaVerde(email);
  }

  if (valorTelefone !== "") {
    colocarBordaVerde(telefone);
  }

  if (valorMensagem !== "") {
    colocarBordaVerde(mensagem);
  }
};
