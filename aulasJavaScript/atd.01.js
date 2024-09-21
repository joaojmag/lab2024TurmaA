// pop -> remove do fim da array
let x = [1, 2, 3, 4, 5]
let remover = x.pop()

console.log(x);
console.log(remover);

// shift -> remove do começo da array
let nome = ["Erika", "Marcela", "Mari"]
let n1 = nome.shift();

console.log(nome);
console.log(n1);

// splice -> remover pelo índice do elemento 
let numeros = [1,2,3,4,5]
let number = numeros.splice(3, 1)

console.log(numeros);
console.log(number); 
    
    // Ex com nomes
        let nome2 = ["Joao", "Marcela", "Erika"]
        let nomeRemovido = nome2.splice(1, 1)

        console.log(nome2s);
        console.log(nomeRemovido)