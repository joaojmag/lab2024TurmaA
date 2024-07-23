algoritmo "95"
var
num1, soma,num2, resultado: inteiro


funcao Somador(num1,num2: inteiro): inteiro

inicio
    soma <- num1 + num2
    retorne soma
fimfuncao

inicio

    escreva("Digite o primeiro número: ")
    leia(num1)
    escreva("Digite o segundo número: ")
    leia(num2)


    resultado <- Somador(num1, num2)


    escreva("O resultado da soma de ", num1, " e ", num2, " é: ", resultado, "")
fimalgoritmo
