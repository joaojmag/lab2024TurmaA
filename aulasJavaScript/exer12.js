/*const jogador1 = { nome: "Erika", energia: 100, vidas: 3, magia: 150 }
const jogador2 = { nome: "Erika2", energia: 100, vidas: 5, velocidade: 80 }
const jogador3 = {jogador1, jogador2}
console.log(jogador3);
//-------------------------------------------------------------------------//
const jogador4 = { ...jogador1, ...jogador2 }
console.log(jogador4);
//--------------------------------------------//
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}
let valor = [5, 9, 6]
console.log(soma(...valor)); // spread serviu para espalhar os valores e cada um ir para seu lugar da função*/
//------------------------------------------------------------------------------------------//

const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]
console.log(objs1);
console.log(objs2);