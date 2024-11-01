//Objeto
const btnAdicionar = document.querySelector("#btnAdd")
const res = document.querySelector(".res")
const nome = document.querySelector("#f_nome")
const idade = {}
let pessoas = []

const Pessoa = {
    nome,
    idade,
    getNome : function(){
        return this.nome
    },
    getIdade : function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

btnAdicionar.addEventListener("click", (evt) => {
    const nome2 = document.querySelector("#f_nome")
    const idade2 = document.querySelector("#f_idade")

    const p =  nome2.value
    const p2 =  idade2.value
    
    pessoas.push(p)

    nome.value = ""
    idade.value = ""
    nome.focus()
    adicionarPessoa()
    console.log("object");
})

const adicionarPessoa = () => {
    res.innerHTML = " "
    pessoas.map((el) => {
        const novaDiv = document.createElement("div")
        novaDiv.setAttribute("class", "novaPessoa")
        novaDiv.innerHTML = `Nome: ${el.nome} <br/> Idade: ${el.idade}`
        res.appendChild(novaDiv);
    })
}


//Formas diferentes de mostrar o resuldado
    // p1["nome"]= "Leticia"
    // Pessoa.setNome("Ribeiro")
    // p3.nome = "Jaciara"

    // console.log(Pessoa.nome);
    // console.log(p2.getNome());
    // console.log(p3.nome);