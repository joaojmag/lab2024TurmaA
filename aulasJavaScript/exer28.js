const nomes = ["Erika", "Marcela", "João", "Marcos"]

//para code
let n = nomes.map((elemento, index) =>{
    return "Nome: " + elemento + "| Posição: " + index
})
console.log(n);  


function mudarNome (){
    let elemento  = document.getElementsByTagName("div")
    elemento = [...elemento]
    elemento.map ((e,i)=>{
        e.innerHTML= `Nomes: ${nomes[i]} | Posição ${i}`
    })
}
