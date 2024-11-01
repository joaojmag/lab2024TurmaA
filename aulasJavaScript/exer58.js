//OBJETOS
class cores {
    constructor(parametroNome, parametroCor) {
        this.nome = parametroNome

        if (parametroCor == 1) {
            this.cor = "Azul"
            this.nota = 9
        } else if (parametroCor == 2) {
            this.cor = "Lilas"
            this.nota = 10
        } else if (parametroCor == 3) {
            this.cor = "Marrom"
            this.nota = 6
        }
    }
    getInfo (){  //transformando em array
        return [`Nome: ${this.nome} |Cor: ${this.cor} |Nota: ${this.nota}`]
    }
    geral() {
        console.log(`Nome: " ${this.nome}`);
        console.log(`Cor : " ${this.cor}`);
        console.log(`Nota: " ${this.nota}`);
        console.log(" ");
    }
}
let p1 = new cores("Erika", 1)
let p2 = new cores("Letícia", 2)
let p3 = new cores("Ribeiro", 3)

p1.geral()
p2.geral()
p3.geral()
console.log("=============");
console.log(p1.getInfo());