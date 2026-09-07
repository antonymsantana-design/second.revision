const modal = document.getElementById("modalContato");
const btnAbrir = document.getElementById("btn");
const btnFechar = document.getElementById("btnClose");
const enviar = document.getElementById("enviar");
const rolar = document.getElementById("btnTopo");
const clear = document.getElementById("formContato")

btnAbrir.onclick = function () {
  modal.classList.add("active");
  clear.nodeValue;
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
    const item = pergunta.parentElement;
    const resposta = item.querySelector(".crd-resposta");

    if (resposta.classList.contains("ativo")) {
      resposta.classList.remove("ativo");
    } else {
      resposta.classList.add("ativo");
    }
  })
})
