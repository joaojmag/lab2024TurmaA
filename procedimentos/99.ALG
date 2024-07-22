algoritmo "99"
var
a, c, resultado:inteiro

funcao Potencia(base, expoente:inteiro):inteiro
var
resultado, contador:inteiro
inicio
resultado <- 1

    para contador de 1 ate expoente faca
        resultado <- resultado * base
    fimpara

    retorne resultado
fimfuncao

inicio

Escreval("Digite a base da potência: ")
Leia(a)
Escreval("Digite o expoente da potência: ")
Leia(c)

    resultado <- Potencia(a, c)

    Escreval("O resultado de ", a, "^", c, " = ", resultado)

fimalgoritmo


