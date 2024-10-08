const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_transferir")
const todosCurso = [...document.querySelectorAll(".curso")]

todosCurso.map((el) => {
    el.addEventListener("click", (evento) => {
        const curso = evento.target
        curso.classList.toggle("mudar")
    })
})
btn.addEventListener("click", ()=> {
    const cursoSelecionados = [...document.querySelectorAll(".mudar")]
    const cursoNaoSelecionados = [...document.querySelectorAll(".curso:not(.mudar)")]
   
    cursoSelecionados.map((el) => {
        caixa2.appendChild(el)
    })
    
    cursoNaoSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})
