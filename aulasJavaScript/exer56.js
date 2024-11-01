//Template Strings
const caixa = document.querySelector("#caixa")
const cores = ["Azul", "Braco", "Lilas"]
const nome1 = "Erika "
const nome2 = "Leticia "
const nome3 = "Ribeiro"

// const completo = "Meu nome é: " + nome1+nome2+nome3
// const completo = `Meu nome é: <br/> ${nome1}${nome2} ${nome3} `
// caixa.innerHTML = completo

//listando com vetor  - ol numera / ul pontua
let ol = `<ol>`
cores.map ((el)=>{
    ol += `<li> ${el} </li>`
})
ol + `</ol>`


caixa.innerHTML = ol