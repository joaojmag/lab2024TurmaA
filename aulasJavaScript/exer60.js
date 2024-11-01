//OBJETOS
const btnAdicionar = document.querySelector("#btnAdd")
const res = document.querySelector(".res")
const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")
let pessoas = []

function Pessoa(parametroNome, parametroIdade) {
    this.nome = parametroNome
    this.idade = parametroIdade
    this.getNome = function () {
        return this.nome
    }
    this.getIdade = function () {
        return this.idade
    }
    this.setNome = function (nome) {
        this.nome = nome
    }
    this.setIdade = function (idade) {
        this.idade = idade
    }
    this.geral= function() {
        console.log(`Nome: " ${this.nome}`);
        console.log(`Idade : " ${this.idade}`);
        console.log(" ");
    }
}


const adicionarPessoa = () => {
    res.innerHTML = " "
    pessoas.map((el) => {
        const novaDiv = document.createElement("div")
        novaDiv.setAttribute("class", "novaPessoa")
        novaDiv.innerHTML = `Nome: ${el.getNome()} <br/> Idade: ${el.getIdade()}`
        res.appendChild(novaDiv);
    })
}
btnAdicionar.addEventListener("click", (evt) => {
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    adicionarPessoa()
})