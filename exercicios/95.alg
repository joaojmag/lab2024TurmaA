algoritmo "semnome"
var
num1,soma,num2, resultado:inteiro

funcao somador(num1,num2:inteiro):inteiro
   inicio
      soma <- num1 + num2
         retorne soma
fimfuncao


inicio
Escreval("Digite o primeiro número: ")
Leia(num1)
Escreval("Digite o segundo número: ")
Leia(num2)

resultado <- somador(num1,num2)

Escreval("O resultado da soma de ", num1, " e ", num2, " é: ", resultado, "")

fimalgoritmo
