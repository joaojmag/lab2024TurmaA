//Get Elements By Id
//Pegar elemento pelo Id
const arrayElementos = [d1, d2, d3]
let n1 = true

const botao =()=>{
    let d1 = document.getElementById ("d1")
    let d2 = document.getElementById ("d2")
    let d3 = document.getElementById ("d3")

   if (n1){
    d1.innerHTML = "Nome"
    d2.innerHTML = "Nome"
    d3.innerHTML = "Sobrenome"
    n1 = false
   }else {
    for (d of arrayElementos)
        d.innerHTML = "Curso Javascript"
    n1 = true
   }
}
console.log(arrayElementos);