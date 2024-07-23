algoritmo "78"

var
numeros:vetor [0..15] de inteiro
i:inteiro

inicio
para i de 1 até 15 faça
    escreva("Digite o ", i, "º número:  ")
    leia(numeros[i])
fimpara

escreva("Os números digitados são:  ")
para i de 1 até 15 faça
    escreva(numeros[i], " ")
fimpara
escreva(" ")


escreva("Posições dos números múltiplos de 10:  ")
para i de 1 até 15 faça
    se numeros[i] % 10 = 0 então
        escreva("Número ", numeros[i], " na posição ", i, "  ")
    fimse
fimpara

fimalgoritmo
