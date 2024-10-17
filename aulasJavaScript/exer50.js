//REDUCE
const p_array = document.querySelector("#array")
const btnReduzir = document.getElementById("btnReduzir")
const resultado = document.querySelector("#resultado")

const elementosArray = [1, 2, 3, 4, 5]
p_array.innerHTML = "[" + elementosArray + "]"

let ant = []
let atu = []
let dobro = []

btnReduzir.addEventListener("click", (evt) => {
    dobro.push(elementosArray[0]*2)
    resultado.innerHTML = elementosArray.reduce((anterior, atual, index) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual * 2)

        return atual + anterior
    })
    resultado.innerHTML += "<br/> Valor anterior: " + ant + "<br/> Valor atual: " + atu + "<br/> Dobro: " + dobro
})
