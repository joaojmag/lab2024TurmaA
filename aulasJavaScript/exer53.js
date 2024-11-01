//ARRAYS 2 - calculadora
const btnAdicao = document.getElementById ("btnAdicao")
const btnSubtracao = document.getElementById ("btnSubtracao")
const btnMultiplicacao = document.getElementById ("btnMultiplicacao")
const btnDivisao = document.getElementById ("btnDivisao")
const resultado = document.querySelector ("#resultado")

const operacao = [
    ()=> {
      const valor = [document.querySelector("#valor1").value, document.querySelector("#valor2").value]
      resultado.value = Number(valor[0]) + Number(valor[1])
    // Number -  Converte o valor passado para um número
    },
    ()=>{
        const valor = [document.querySelector("#valor1").value, document.querySelector("#valor2").value]
        resultado.value = Number(valor[0] - Number(valor[1]))
    },
    ()=>{
        const valor = [document.querySelector("#valor1").value, document.querySelector("#valor2").value]
        resultado.value = Number(valor[0] * Number(valor[1]))
    },
    ()=>{
        const valor = [document.querySelector("#valor1").value, document.querySelector("#valor2").value]
        resultado.value = Number(valor[0] / Number(valor[1]))
    }
]

btnAdicao.addEventListener("click", operacao[0])
btnSubtracao.addEventListener("click", operacao[1])
btnMultiplicacao.addEventListener("click", operacao[2])
btnDivisao.addEventListener("click", operacao[3])



// console.log(operacao[0](valores));
// console.log(operacao[1](valores));
//operacao[2](valores) 