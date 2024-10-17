//remove
//try - catch
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
const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+ indice) 
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML= curso
    
    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")
    
    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")
    
    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    
    return novoElemento
}

nomes.map((el)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCurso.appendChild(novoElemento)
    indice++
})

const radioSelecionado = ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter ((elemento)=>{
        return elemento.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evento)=>{
    const rs= radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`curso selecionado: ${cursoSelecionado}`)
        
    } catch (erro) {
        alert("Selecione um curso!")
    }
})

btnRemoverCurso.addEventListener("click", (evento)=>{
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()

    } else {
        alert("Selecione um curso!")        
    }
   
})

btnAdicionarAntes.addEventListener("click", (evento)=>{
    const rs= radioSelecionado()
    try {

        if (nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso, cursoSelecionado)
        } else{
            alert("Digite o nome do curso!")
        }
        
    } catch (erro) {
        alert("Selecione um curso!")
    }
})

btnAdionarDepois.addEventListener("click", (evento)=>{
    const rs= radioSelecionado()
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        } else {
            alert("Digite o nome do curso!")
        }
    } catch (erro) {
        alert("Selecione um curso!")
    }
})