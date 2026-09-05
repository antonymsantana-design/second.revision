// 1. Guardamos os elementos da tela dentro de variáveis
const modal = document.getElementById('modalContato')
const btnAbrir = document.getElementById('btn')
const btnFechar = document.getElementById('btnClose')
const enviar = document.getElementById('enviar')
const rolar = document.getElementById('btnTopo')


btnAbrir.onclick = function() {
    modal.classList.add('active')
}

btnFechar.onclick = function() {
    modal.classList.remove('active')
}

enviar.onclick = function(){
    window.alert('enviado com sucesso')
    modal.classList.remove('active')
}

rolar.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const botoes = document.querySelectorAll('.btn-filtro')
const cards = document.querySelectorAll('.card-item')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const
    })
})
