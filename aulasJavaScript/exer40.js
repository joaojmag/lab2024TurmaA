//createElement
const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll(".curso")]
const nomes = [
    "Erika",
    "Vandin",
    "Anthony",
    "Diogo"
]

nomes.map((el,i)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+i)  ///setAttribute para atribuir classe ou id
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML= el
    caixa1.appendChild(novoElemento)
    
})

