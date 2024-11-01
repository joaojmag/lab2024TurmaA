const btnAdicionar = document.getElementById("btnAdicionar")
const btnCancelar = document.getElementById("btnCancelar")
const btnSalvar = document.getElementById("btnSalvar")
const caixa = document.querySelector(".caixa")
const caixaSpan = document.getElementById("caixaSpan")
const caixaFiltrados = document.querySelector("#caixaFiltrados")
let contador = 0;
let pessoas = []
let idClicado = null

caixa.style.display = 'none';

function elementoEditar(id = null) {
    caixa.style.display = 'block'
    const inputNome = document.getElementById("inputNome")
    const inputIdade = document.getElementById("inputIdade")

    const pessoaEditada = pessoas[id]

    inputNome.value = pessoaEditada.nome
    inputIdade.value = pessoaEditada.idade
    pessoas[id].nome = inputNome.value
}

const criarElemento = () => {
    const divN = document.createElement("div")
    const novaSpan = document.createElement("span")
    const bntRemover = document.createElement("button")
    const bntEditor = document.createElement("button")
    
    novaSpan.innerHTML = ` Nome: ${inputNome.value} <br/> Idade: ${inputIdade.value} `
    bntRemover.textContent = 'Remover';
    bntEditor.textContent = 'Editar'
    
    novaSpan.setAttribute("id", contador)
    bntRemover.setAttribute("class", "bnt")
    bntEditor.setAttribute("class", "bnt")
    divN.setAttribute("class", "caixaElementos")
    
    
    divN.appendChild(novaSpan)
    divN.appendChild(bntRemover)
    divN.appendChild(bntEditor)
    caixaSpan.appendChild(divN)
    
    bntRemover.addEventListener("click", () => {
        divN.remove()
    })
    
    bntEditor.addEventListener("click", () => {
        idClicado = novaSpan.getAttribute("id")
        btnAdicionar.style.display = 'none';
        elementoEditar(idClicado)



    })

    contador++;

}

btnSalvar.addEventListener("click", () => {
    caixa.style.display = 'none';
    btnAdicionar.style.display = 'block';
    if (inputNome.value != "" && inputIdade.value != "") {

        if (idClicado != null) {
            pessoas[idClicado].nome = inputNome.value
            pessoas[idClicado].idade = inputIdade.value

            var alunoSpan = document.getElementById(idClicado)
            alunoSpan.innerHTML = `Nome: ${inputNome.value} <br/> Idade: ${inputIdade.value}`

            idClicado = null
        } else {
            pessoas.push({ nome: inputNome.value, idade: inputIdade.value })
            criarElemento()
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

const filtro = ()=>{
    const filtroInput = document.getElementById("filtroInput")
    let filtragem = filtroInput.value
    let comparativo = filtragem.normalize('NFD').toLowerCase();
    caixaFiltrados.innerHTML = ''

    let filtrados = pessoas.filter (e => e.nome.includes(comparativo ) )
    caixaSpan.style.display='none'
    
    criarElementoFiltro(filtrados)
    


    filtroInput.value = ""
}
const btnFiltrar = document.getElementById("btnFiltrar")
btnFiltrar.addEventListener("click", filtro)

const btnVoltar = document.getElementById("btnVoltar")
btnVoltar.addEventListener("click", ()=>{
    caixaSpan.style.display = 'block'
    caixaFiltrados.innerHTML = ''
    filtroInput.value = ""
})

const criarElementoFiltro = (filtrados) => {
    filtrados.map((el)=>{
        const divN = document.createElement("div")
        const novaSpan = document.createElement("span")
        const bntRemover = document.createElement("button")
        const bntEditor = document.createElement("button")
        
        novaSpan.innerHTML = ` Nome: ${el.nome} <br/> Idade: ${el.idade} `
        bntRemover.textContent = 'Remover';
        bntEditor.textContent = 'Editar'
        
        novaSpan.setAttribute("id", contador)
        bntRemover.setAttribute("class", "bnt")
        bntEditor.setAttribute("class", "bnt")
        divN.setAttribute("class", "caixaElementos")
        
        bntRemover.addEventListener("click", () => {
            divN.remove()
        })
    
        divN.appendChild(novaSpan)
        divN.appendChild(bntRemover)
        divN.appendChild(bntEditor)
        caixaFiltrados.appendChild(divN)

        bntEditor.addEventListener("click", () => {
            idClicado = novaSpan.getAttribute("id")
            btnAdicionar.style.display = 'none';
            elementoEditar(idClicado);
        })
    
        contador++;

    })

}