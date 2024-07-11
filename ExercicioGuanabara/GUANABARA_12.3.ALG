Algoritmo "GUANABARA_12.3"

var
   c, n1, n2 : Inteiro

// procedimentos

Procedimento Fibonacci(var a, b: Inteiro)
var c : Inteiro
Inicio

      c <- a + b
      Escreva (c)
      a <- b
      b <- c

FimProcedimento

Inicio

      n1 <- 0
      Escreva (n1)
      n2 <- 1
      Escreva (n2)

      Para c <- 3 ate 10 faca
           Fibonacci(n1, n2)
      FimPara

fimalgoritmo