const divGeral = document.getElementById("c1");
const nomeAdicionado = document.querySelector("#nomeAdicionado")
const btnAdicionar = document.getElementById("btn1")
const inputCheckbox = document.getElementById("inputCheckbox")
const todosNomes = [...document.querySelectorAll(".classeGeral")]


let entrada = [
    {
        nome: "Erika ",
        coordenador: false
    },
    {
        nome: "Dolly",
        coordenador: true
    },
    {
        nome: "Anthony",
        coordenador: false
    }
];

entrada.map((e) => {
    const criarSpan = document.createElement("span");
    criarSpan.textContent = e.nome;
    criarSpan.setAttribute("class", "classeObjeto")

    divGeral.appendChild(criarSpan);

    criarSpan.addEventListener("click", (evento) => {
        evento.target.classList.toggle("mudar")
    }) 
});



btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault();
    let valor = nomeAdicionado.value

    const novoAluno = {
        nome: valor,
        coordenador: inputCheckbox.checked
    }
    entrada.push(novoAluno)
    
    const newName = document.createElement("span");
    newName.setAttribute("class", "classeGeral")

    if (inputCheckbox.checked === true) {
        newName.classList.add("destaque")
    }
    
    newName.addEventListener("click", (evento) => {
        evento.target.classList.toggle("mudar")
    }) 

    newName.textContent = valor
    divGeral.appendChild(newName);

    nomeAdicionado.value = ""
})

/* todosNomes.map((el) => {
    
}) */
