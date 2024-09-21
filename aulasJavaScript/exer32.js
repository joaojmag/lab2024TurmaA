// tagClassName
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]

console.log(cursosTodos);
console.log(cursosC1)
console.log(cursosC2)

const d1 = document.getElementById ("c2")

cursosC2.map((elemento) => {
    elemento.classList.add("destaque")
    d1.innerHTML = ("Marcela Esteves") 
})   
