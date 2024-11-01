const btnAdicionar = document.getElementById("btnAdicionar")
const btnCancelar = document.getElementById("btnCancelar")
const btnSalvar = document.getElementById("btnSalvar")
const caixa = document.querySelector(".caixa")
let contador = 0;
let pessoas = []
let idClicado = null

caixa.style.display = 'none';

function criarElementos(id = null) {
    console.log('idClicado 2', id);

    caixa.style.display = 'block'
    const inputNome = document.getElementById("inputNome")
    const inputIdade = document.getElementById("inputIdade")

    console.log('pessoas[id]', pessoas[id], id);
    console.log('pessoas', pessoas);

    const pessoaEditada = pessoas[id]

    inputNome.value = pessoaEditada.nome
    inputIdade.value = pessoaEditada.idade
    pessoas[id].nome = inputNome.value
    console.log('inputNome.value', inputNome.value);
}

const elementosSpan = () => {
    const novaSpan = document.createElement("span")
    const bntRemover = document.createElement("button")
    const bntEditor = document.createElement("button")
    
    
    novaSpan.innerHTML = ` Nome: ${inputNome.value} <br/> Idade: ${inputIdade.value} `
    bntRemover.textContent = 'Remover';
    bntEditor.textContent = 'Editar'
    
    novaSpan.setAttribute("id", contador)
    bntRemover.setAttribute("class", "bnt")
    bntEditor.setAttribute("class", "bnt")

    bntRemover.addEventListener("click", () => {
        console.log(pessoas[idClicado]);
        novaSpan.remove()
    })

    caixaSpan.appendChild(novaSpan)
    novaSpan.appendChild(bntRemover)
    novaSpan.appendChild(bntEditor)

    bntEditor.addEventListener("click", () => {
        btnAdicionar.style.display = 'none';
        idClicado = novaSpan.getAttribute("id")
        criarElementos(idClicado)
        console.log('idClicado', idClicado);


    })

    contador++;

}

btnSalvar.addEventListener("click", () => {
    caixa.style.display = 'none';
    btnAdicionar.style.display = 'block';
    if (inputNome.value != "" && inputIdade.value != "") {

        if (idClicado != null) {
            // logica do editar
            console.log('idClicado', idClicado);
            console.log('inputNome.value', inputNome.value);
            console.log('inputIdade.value', inputIdade.value);


            pessoas[idClicado].nome = inputNome.value
            pessoas[idClicado].idade = inputIdade.value
            console.log('pessoas', pessoas[idClicado]);

            // var alunoSpan = document.getElementById(idClicado)
            //alunoSpan.innerHTML = ` Nome: ${inputNome.value} <br/> Idade: ${inputIdade.value} `

            idClicado = null
        } else {
            pessoas.push({ nome: inputNome.value, idade: inputIdade.value })
            elementosSpan()
        }

        inputNome.value = ""
        inputIdade.value = ""
    } else {
        alert("Campo vazio")

    }

})
btnCancelar.addEventListener("click", () => {
    caixa.style.display = 'none'
    btnAdicionar.style.display = 'block';
    inputNome.value = ""
    inputIdade.value = ""
})

btnAdicionar.addEventListener("click", () => {
    caixa.style.display = 'block'
    btnAdicionar.style.display = 'none'


})
