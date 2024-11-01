const caixa = document.querySelector(".caixa")
const caixaSpan =  document.querySelector("#caixaSpan")
const btnAdicionar = document.createElement("button")
let clicado = true
let vetPessoas = []

btnAdicionar.textContent = 'Adicionar 2'
caixa.appendChild(btnAdicionar)


function criarElementos() {
    const nome = document.createElement("input")
    const labelNome = document.createElement("label")
    const idade = document.createElement("input")
    const labelIdade = document.createElement("label")
    const btnSalvar = document.createElement("button")

    labelNome.textContent = "Adicionar Nome"
    labelIdade.textContent = "Adicionar Idade"
    btnSalvar.textContent = "Adicionar"

    caixa.appendChild(labelNome)
    caixa.appendChild(nome)
    caixa.appendChild(labelIdade)
    caixa.appendChild(idade)
    caixa.appendChild(btnSalvar)

    let pessoa = {
        nome: nome.value,
        idade: idade.value
    }
    vetPessoas.push(pessoa)
    
    const elementosSpan = () => {
        const novaSpan = document.createElement("span")
        const bntRemover = document.createElement("button")
        const bntEditor = document.createElement("button")

        novaSpan.innerHTML = ` Nome: ${nome.value} <br/> Idade: ${idade.value} `
        bntRemover.textContent = 'Remover';
        bntEditor.textContent = 'Editar'

        bntRemover.setAttribute("class", "bnt")
        bntEditor.setAttribute("class", "bnt")

        bntRemover.addEventListener("click", () => {
            novaSpan.remove()
        })

        bntEditor.addEventListener("click", () => {
            
        })

        caixaSpan.appendChild(novaSpan)
        novaSpan.appendChild(bntRemover)
        novaSpan.appendChild(bntEditor)
    }
    btnSalvar.addEventListener("click", () => {
        if (nome.value != "" & idade.value != ""){
            elementosSpan()
            console.log(vetPessoas);
            caixa.style.display = 'none'
            btnAdicionar.style.display = 'block'    
        }else {
            alert ("Campo vazio")
        
        }
 
    })

}

btnAdicionar.addEventListener("click", () => {
    if (clicado == true) {
        criarElementos()

        btnAdicionar.style.display = 'none'

        clicado = false

    }
})