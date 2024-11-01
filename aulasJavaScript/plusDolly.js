const funcionarios = [
    {
        nome: 'José',
        salario: 1500,
        anosTrabalhados: 6
    },
    {
        nome: 'Maria',
        salario: 2200,
        anosTrabalhados: 3
    },
    {
        nome: 'Everton',
        salario: 3000,
        anosTrabalhados: 5
    }
]

let funcionarios2 = funcionarios.map((funcionario) => {
    if (funcionario.anosTrabalhados <5) { 
        funcionario.salario= (funcionario.salario * 1.1).toFixed(2)
        funcionario.aumento = " aumento: 10%"
    }else {
        funcionario.salario = (funcionario.salario * 1.2).toFixed(2)
        funcionario.aumento = " aumento: 20%"
    }
    return funcionario 
})

console.log(funcionarios2);