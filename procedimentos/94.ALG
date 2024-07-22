Algoritmo "94"
var
n1: inteiro

Procedimento Fibonacci(n1: inteiro)
var
primeiro, segundo, proximo,contador: inteiro
inicio
primeiro <- 1
segundo <- 1
Escreval(primeiro)
Escreval(segundo)

   para contador <- 1 ate n1 faca
      proximo <- primeiro + segundo
      escreval(proximo)
      primeiro <- segundo
      segundo <- proximo
   fimpara
FimProcedimento

inicio
Escreval("Sequência de Fibonacci")
Escreval("Quantos termos deseja mostrar? ")
Leia(n1)

   Fibonacci(n1)

FimAlgoritmo


