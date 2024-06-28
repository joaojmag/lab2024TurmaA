Algoritmo "semnome"

Var
nome: caractere
salario, novoSalario: real
anos: inteiro

Inicio
Escreva("Digite o nome do funcionário: ")
Leia(nome)
Escreva("Digite o salário do funcionário: ")
Leia(salario)
Escreva("Digite quantos anos o funcionário trabalha na empresa: ")
Leia(anos)

Se (anos <=3) Entao
novoSalario <- salario + (salario * 0.03)
Senão
Se (anos > 3) e (anos <= 10)  Entao
novoSalario <- salario + (salario * 0.125)
Senão
Se (anos>10)Entao
novoSalario <- salario + (salario * 0.2)
  FimSe
 FimSe
FimSe

    Escreva("O novo salário de ", nome, " é R$", novoSalario)
FimAlgoritmo
