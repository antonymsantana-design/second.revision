// 1. Guardamos os elementos da tela dentro de variáveis
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
const respostas = document.querySelectorAll(".crd-resposta");
.faq-container {
    max-width: 900px;
    margin: 60px auto;
    padding: 20px;
}

.faq-titulo {
    text-align: center;
    color: red;
    margin-bottom: 25px;
}

.faq-item {
    margin-bottom: 15px;
}

.faq-pergunta {
    width: 100%;
    background-color: #f1c233;
    color: red;
    border: none;
    padding: 18px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.faq-pergunta:hover {
    background-color: red;
    color: #f1c233;
}

.faq-resposta {
    max-height: 0;
    overflow: hidden;
    background-color: white;
    transition: 0.4s;
}

.faq-resposta p {
    padding: 15px 20px;
    color: #333;
    line-height: 1.5;
}

.faq-item.ativo .faq-resposta {
    max-height: 200px;
}
perguntas.onclick = function () {};
