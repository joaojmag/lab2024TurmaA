/*let valor = [15,19,18,16,17]
for (let contador = 0; contador < valor.length; contador++) {
        console.log(valor[contador]);    
}*/

const objs = document.getElementsByTagName("div")
for(aux of objs){
    console.log(aux.innerHTML="Curso Java");
}

for(aux in objs){
    console.log(aux);
}

console.log("FIM!"); 

