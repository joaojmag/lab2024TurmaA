//OBJETOS

let pessoas = []

class Pessoa {
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome
        this.idade = parametroIdade
    }
    getNome () {
        return this.nome
    }
    getIdade () {  
        return this.idade
    }
    setNome (nome){
        this.nome = nome
    }
    setIdade (idade){
        this.idade = idade
    }
    geral() {
        console.log(`Nome: " ${this.nome}`);
        console.log(`Idade : " ${this.idade}`);
        console.log(" ");
    }
}

const btnAdicionar = document.querySelector("#btnAdd")
const res = document.querySelector(".res")

const adicionarPessoa = ()=>{
    pessoas.map((el)=>{
        const novaDiv = document.createElement ("div")
        novaDiv.setAttribute ("class", "novaPessoa")
        novaDiv.innerHTML = `Nome: ${el.getNome()} <br/> Idade: ${el.getIdade()}`
        res.appendChild(novaDiv);
    })
}
btnAdicionar.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    adicionarPessoa()
})