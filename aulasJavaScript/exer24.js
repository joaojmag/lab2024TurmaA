//Função anônima 
const anonima = function (...valores) {
    let resp = 0
    for(let termos of valores){
        resp += termos
        console.log(resp);
            
    }
    console.log("====================")
   return resp
}
console.log(anonima(15,12,3));
console.log("====================");

//Função construtor - NEW
const funcao = new Function("v1","v2", "return v1*v2")
console.log(funcao(5,10));

