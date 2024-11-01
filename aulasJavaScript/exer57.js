//OBJETOS
class Pessoa {
    constructor (parametroNome){
        this.nome = parametroNome
    }
}
let p1 = new Pessoa("Erika")
let p2 = new Pessoa("Letícia")
let p3 = new Pessoa("Ribeiro")

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);