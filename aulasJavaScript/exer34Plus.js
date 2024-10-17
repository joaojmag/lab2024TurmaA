const n = document.getElementById("c1");
const adicionar = document.querySelector("#btn1");
const nome = document.querySelector("#name")
const inputCheckbox = document.getElementById("inputCheckbox")
const todosNomes = [...document.querySelectorAll("span")]

let entrada = [
    {
        nome: "Erika",
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
const aluno = {
    nome: 'Walter',
    coordenador: false
}

//===================================================
entrada.map((e) => {
    const criarSpan = document.createElement("span");
    criarSpan.textContent = e.nome;
    n.appendChild(criarSpan);
});
//=====================================================

adicionar.addEventListener("click", (e) => {
    e.preventDefault();
    let valor = nome.value
/*     console.log(valor); */

    const novoAluno = {
        nome: valor,
        coordenador: inputCheckbox.checked
    }
    
    entrada.push(novoAluno)
    
    const newName = document.createElement("span");
    if (inputCheckbox.checked === true) {
        newName.classList.add("destaque")
    }
    
    newName.textContent = valor
    n.appendChild(newName);
    
    nome.value = ""
})

todosNomes.map((el) => {
    el.addEventListener("click", (evento) => {
        const curso = evento.target
        curso.classList.toggle("destaque")
    })
})