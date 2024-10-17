//FIND - EVERY - SOME
const alunos = [
    {
        nome: 'Vander',
        nota: 8
    },
    {
        nome: 'Erika',
        nota: 2
    },
    {
        nome: 'Lidia',
        nota: 6
    },
    {
        nome: 'Yasmin',
        nota: 8
    }
]

// find - procure alguem q tirou menos q 8
const  menor8 = alunos.find((el)=> el.nota < 8)
console.log(menor8);

// every - verifique se todos os alunos foram aprovados (aprovam os que tiraram nota maior ou igual 6)
const aprovados = alunos.every((el)=>el.nota >= 6)
console.log(aprovados);

// some - verifique se teve alguem reprovado (reprovam os que tiraram nota menor q 6)
const reprovado = alunos.some((el)=> el.nota <6 )
console.log(reprovado);