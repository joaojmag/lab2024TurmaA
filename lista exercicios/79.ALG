algoritmo "79"

var
numeros:vetor [0..10] de inteiro
i:inteiro

inicio
 para i de 1 até 10 faça
     escreva("Digite o ", i, "º número: ")
     leia(numeros[i])
 fimpara

 escreva("Números pares e suas posições:  ")
 para i de 1 até 10 faça
     se numeros[i] % 2 = 0 então
         escreva("Número ", numeros[i], " na posição ", i, "  ")
     fimse
 fimpara

fimalgoritmo
