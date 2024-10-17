//ARRAYS
const caixa = document.getElementById("caixa")
const cores = [
    "Vermelho",
    "Azul",
    "Roxo"
]
let curso = [
    "Erika", 
    "Leticia", 
    "Ribeiro",
    cores
]
// curso.push("Vandin") // push - adiciona elementos no final da array
// curso.pop() // pop - tira elementos do final da array
// curso.unshift("Diogo") // unshift - adiciona elementos no inicio da array
// curso.shift("Antonio") // shift - tira elementos no inicio da array

console.log(curso[3][1]);

curso.map((el)=>{
    const p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
