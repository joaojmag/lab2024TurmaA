algoritmo "semnome"
var
soma,i,num1,num2,resultado: inteiro

funcao SuperSomador( n1,n2 :inteiro ):inteiro
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
Escreva("Digite o primeiro número: ")
Leia(num1)
Escreva("Digite o segundo número: ")
Leia(num2)


    resultado <- SuperSomador(num1, num2)

    Escreva("A soma dos valores no intervalo entre ", num1, " e ", num2, " é: ", resultado)
fimalgoritmo
