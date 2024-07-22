algoritmo "96"
var
n1,n2:inteiro
M:real
funcao Soma(x,y:inteiro):real
inicio
retorne  ( x+y )/2
fimfuncao
inicio

Escreval("Digite a primeira nota do aluno: ")
Leia(n1)
Escreval("Digite a segunda nota do aluno: ")
Leia(n2)
M <- Soma(n1,n2)
Escreval("A média do aluno é: ",M)
fimalgoritmo