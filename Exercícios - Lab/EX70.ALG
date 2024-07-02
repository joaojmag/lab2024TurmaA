Algoritmo "Ex70"

//70) [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
//de Fibonacci:
//1 1 2 3 5 8 13 21...

Var
   c, num1, num2 : inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("|  Sequência de Fibonacci  |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      num1 <- 0
      Escreva(num1)

      num2 <- 1
      Escreva(num2)

      Para c <- 1 ate 10 faca

           c := num1 + num2
           Escreva (c)
           num1 := num2
           num2 := c
      fimpara

fimalgoritmo
