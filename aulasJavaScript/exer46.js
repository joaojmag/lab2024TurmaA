//toggle
const caixaCurso = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll(".curso")]
const btnCursoSelecionado = document.getElementById("caixaCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdionarDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")
const nomes = [
    "Erika",
    "Vandin",
    "Anthony",
    "Diogo"
]
let indice = 0

const tirarSelecao = () => {
    const cursoSelecionado = [...document.querySelectorAll(".seleciondo")]
    cursoSelecionado.map((el) => {
        el.classList.remove("seleciondo")
    })
}



const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    novoElemento.addEventListener("click", (evento) => {
        tirarSelecao()
        evento.target.classList.toggle("seleciondo")
    })

    return novoElemento
}

nomes.map((el) => {
    const novoElemento = criarNovoCurso(el)
    caixaCurso.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursoSelecionado = [...document.querySelectorAll(".seleciondo")]
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evento) => {
    try {
        alert("curso selecionado: " + cursoSelecionado().innerHTML)

    } catch (erro) {
        alert("Selecione um curso!")
    }
})

btnRemoverCurso.addEventListener("click", (evento) => {
    const cs = cursoSelecionado()
    if (cs != undefined) {
        cs.remove()

    } else {
        alert("Selecione um curso!")
    }

})

btnAdicionarAntes.addEventListener("click", (evento) => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert("Digite o nome do curso!")
        }

    } catch (erro) {
        alert("Selecione um curso!")
    }
})

btnAdionarDepois.addEventListener("click", (evento) => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            alert("Digite o nome do curso!")
        }
    } catch (erro) {
        alert("Selecione um curso!")
    }
})