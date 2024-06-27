Algoritmo "semnome"

var


nome: caractere
salario, novoSalario: real
anosEmpresa: inteiro
Inicio
escreva("Digite o nome do funcionário: ")
leia(nome)

escreva("Digite o salário do funcionário: ")
leia(salario)

escreva("Digite quantos anos o funcionário trabalha na empresa: ")
leia(anosEmpresa)


se anosEmpresa <= 3 então
novoSalario <- salario + (salario * 0.03)
 escreva("O novo salário de ", nome, " é: ", novoSalario)

senao se anosEmpresa > 3 e anosEmpresa <= 10 então
novoSalario <- salario + (salario * 0.125)
 escreva("O novo salário de ", nome, " é: ", novoSalario)

senao
novoSalario <- salario + (salario * 0.2)
 escreva("O novo salário de ", nome, " é: ", novoSalario)

    fimse



Fimalgoritmo