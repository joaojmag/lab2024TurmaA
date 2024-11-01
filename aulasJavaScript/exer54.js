//Coleção MAP
const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("nome", "Erika")
mapa.set(1, 20)
mapa.set(5, "Leticia")
mapa.set("Ribeiro", 3)

mapa.delete(1)
// caixa.innerHTML = mapa.get("nome")
if (mapa.has(5)) {
    caixa.innerHTML = mapa.get(5)
}

mapa.forEach((el)=>{
    console.log(el);
})

//set vai adicionar um elemento no map
//size quantidade de elementos
//entries - contador / index
//get obtem o valor da chave
//has verifica se existe a chave na coleção8