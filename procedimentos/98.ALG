algoritmo "98"
var
n1,n2,resultado:inteiro

funcao SuperSomador(A,B:inteiro):inteiro
var
    soma, i:inteiro
inicio
    soma <- 0
    para i de A ate B faca
        soma <- soma + i
    fimpara
    retorne soma
fimfuncao

inicio

Escreva("Digite o primeiro número: ")
Leia(n1)
Escreva("Digite o segundo número: ")
Leia(n2)

resultado <- SuperSomador(n1, n2)

Escreval("A soma de todos os números entre ", n1, " e ", n2, " é: ", resultado)

fimalgoritmo

