Algoritmo "GUANABARA_11.5"

Var
   c, num1, num2 : inteiro

Inicio

      Escreval("----------------------")
      Escreval("SEQUÊNCIA DE FIBONACCI")
      Escreval("----------------------")

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