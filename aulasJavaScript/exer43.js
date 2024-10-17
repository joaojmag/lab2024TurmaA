//filter
const caixaCurso = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll(".curso")]
const btnCursoSelecionado = document.getElementById("caixaCursoSelecionado")
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

btnCursoSelecionado.addEventListener("click", (evento)=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter ((elemento)=>{
        return elemento.checked
    })
    radioSelecionado = radioSelecionado[0]
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    
    alert(`curso selecionado: ${cursoSelecionado}`)

    //console.log(cursoSelecionado);
    //console.log(radioSelecionado);
    //console.log(todosRadios);
})