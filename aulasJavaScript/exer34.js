let cursos = [...document.querySelectorAll(".curso")]
const d1 = document.querySelector("#c3")
const d2 = document.querySelector('#c4')

d1.addEventListener("click", msg)
const msg = () => {
    alert("Como vai?")
    console.log("aaaaaa");
}

cursos.map((el) => {
    console.log(el);
    
    if (el.innerText != 'Rafa') {
        el.addEventListener('click', (evento) => {
            const el = evento.target
            el.classList.add("mundando")
        })

    }

})

d2.addEventListener("click", (evento) => {
    const aux = evento.target
    aux.classList.add("destaque")
    alert("Coordenadora")
})

/* const d3 = document.getElementById("d9")
let nome = prompt("Qual nome gostaria de acrescentar? ") */
