//remove
//try - catch
const caixaCurso = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll(".curso")]
const btnCursoSelecionado = document.getElementById("caixaCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const nomes = [
    "Erika",
    "Vandin",
    "Anthony",
    "Diogo"
]

nomes.map((el,i)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+i)  ///setAttribute para atribuir classe ou id
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML= el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCurso.appendChild(novoElemento)
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
   
    //console.log(cursoSelecionado);
})