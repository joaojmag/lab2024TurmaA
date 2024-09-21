"use strict"

let nome= "Bruno"
function teste(){
    
    if (true){
        console.log("dentro do IF: " + nome)
    }
    console.log("dentro da função: " + nome)

}
teste()

console.log("Fora da função: " + nome)
nome="testanto"

console.log(nome)