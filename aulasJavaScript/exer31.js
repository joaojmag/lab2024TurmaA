// diferença de byId e tagName
let d1=document.getElementById("d1")
let d2=document.getElementById("d2")
let d3=document.getElementById("d3")

const  arrayElementos = [d1, d2, d3] 
const colecaoHTML =[...document.getElementsByTagName ("div")]
//com spread a colecao vira uma array
//tendo assim mais comandos para usar
console.log(arrayElementos);
console.log(colecaoHTML);
