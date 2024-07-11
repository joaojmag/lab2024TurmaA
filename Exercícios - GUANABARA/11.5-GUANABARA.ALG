Algoritmo "11.5-GUANABARA"

//Aula #11.5 Guanabara PLUS "Sequência de Fibonacci"

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

      Para c <- 1 ate 13 faca

           c := num1 + num2
           Escreva (c)
           num1 := num2
           num2 := c
      fimpara

fimalgoritmo