Algoritmo "Ex20"

//20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
//ÍMPAR.

Var

    num: Inteiro

inicio

      EscrevaL("Veja se seu número é par ou ímpar")
      EscrevaL(" ")
      Escreva("Digite um número: ")
      Leia(num)

      Se ( num % 2 = 0) entao
         EscrevaL(num, " é Par.")
      senao
         Escreva(num, " é Ímpar.")
      FimSe

fimalgoritmo