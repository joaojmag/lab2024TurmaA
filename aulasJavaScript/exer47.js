//metodo FIND para encontrar elementos em Arrays 
const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.getElementById("btnPesquisar")
const resultado = document.querySelector("#resultado")

//const elementosArray = [10,6,4,15,3,23,10,19, ]
const elementosArray = [
    "Erika",
    "Leticia",
    "Ribeiro"
]
p_array.innerHTML = "[" + elementosArray + "]"

btnPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML = "Valor não encontrado"
    elementosArray.find((el, i)=>{
        if (el.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = "Valor encontrado: " + el + " na posição: "+i
            return el
        }
    }) 
})