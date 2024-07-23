algoritmo "98"
var
   soma, i,num1, num2, resultado: inteiro


funcao SuperSomador( n1,n2 :inteiro ): inteiro


inicio
    soma <- 0

       se n1 > n2 entao

        i <- n1
        n1 <- n2
        n2 <- i
    fimse

     para i de n1 ate n2 faca
        soma <- soma + i
    fimpara

    retorne soma
fimfuncao

inicio

    escreva("Digite o primeiro número: ")
    leia(num1)
    escreva("Digite o segundo número: ")
    leia(num2)


    resultado <- SuperSomador(num1, num2)

    escreva("A soma dos valores no intervalo entre ", num1, " e ", num2, " é: ", resultado)
fimalgoritmo
