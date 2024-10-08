const n = document.getElementById("c1");
const adicionar = document.querySelector("#btn1");
const nome = document.querySelector("#name")
const inputCheckbox = document.getElementById("inputCheckbox")


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


entrada.map((e) => {
    const criarSpan = document.createElement("span");
    criarSpan.textContent = e.nome;
    n.appendChild(criarSpan);
});


adicionar.addEventListener("click", (e) => {
    e.preventDefault();
    let valor = nome.value

    const novoAluno = {
        nome: valor,
        coordenador: inputCheckbox.checked
    }

    entrada.push(novoAluno)
    
    const newName = document.createElement("span");
    newName.textContent = valor
    n.appendChild(newName);
    
    if (inputCheckbox.checked === true) {
        
    }
    
    nome.value = ""

})