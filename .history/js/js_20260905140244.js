const modal = document.getElementById("modalContato");
const btnAbrir = document.getElementById("btn");
const btnFechar = document.getElementById("btnClose");
const enviar = document.getElementById("enviar");
const rolar = document.getElementById("btnTopo");

btnAbrir.onclick = function () {
  modal.classList.add("active");
};

btnFechar.onclick = function () {
  modal.classList.remove("active");
};

enviar.onclick = function () {
  window.alert("enviado com sucesso");
  modal.classList.remove("active");
};

rolar.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const botoes = document.querySelectorAll(".btn-filtro");
const cards = document.querySelectorAll(".card-item");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelec = botao.getAttribute("data-categoria");
    cards.forEach((card) => {
      const categoriaCard = card.getAttribute("data-categoria");
      if (categoriaSelec === "todos" || categoriaSelec === categoriaCard) {
        card.classList.remove("escondido");
      } else {
        card.classList.add("escondido");
      }
    });
  });
});

const perguntas = document.querySelectorAll(".crd-pergunta");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const respostas = document.querySelector(".crd-resposta");
    const mostrarResp = document.querySelectorAll(".crd-item");
    if (respostas.classList.contains("ativo")) {
      respostas.classList.remove("ativo");
      mostrarResp.classList.remove("ativo");
    } else {
      respostas.classList.add("ativo");
      mostrarResp.classList.add("ativo");
    }
  });
});
