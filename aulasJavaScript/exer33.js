//querySelector e querySelectorAll
const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]

const query_divTodas = [...document.querySelectorAll("div > p")]
console.log(query_divTodas);

const query_cursosTodos = [...document.querySelectorAll(".c1")]
console.log(query_cursosTodos);

console.log(divTodas);
console.log(cursosTodos);
console.log(cursosC1)
console.log(cursosC2)

let d1 = document.getElementById ("c8")
d1.map((elemento) => {
    elemento.classList.add("destaque")
    //d1.innerHTML = ("Marcela Esteves") 
}) 


