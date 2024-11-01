// coleção SET
//set não permite repetições
const caixa = document.querySelector("#caixa")

let cores = new Set(["azul", "verde", "marrom"])

cores.add("lilas")
cores.add("amarelo")
cores.add("verde")

cores.delete("amarelo")
cores.forEach((el) => {
    console.log(el);
    caixa.innerHTML += el + "<br/>"
})
console.log(cores);