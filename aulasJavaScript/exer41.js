//removeChild
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

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","imagens.png")
    
    btn_lixeira.addEventListener("click", (evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })


    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
    
})
