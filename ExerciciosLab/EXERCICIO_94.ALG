algoritmo "exercicio_94"
var

   cont, n1, n2, n3: inteiro

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento

Procedimento Fibonacci(i: inteiro)
inicio

      n1 <- 0
      n2 <- 1
      Escreva("1 >>")
      Para cont <- 1 ate i -1 faca
           cont <- n1 + n2
           Escreva(cont, " >> ")
           n1 <- n2
           n2 <- cont
      fimpara

      Escreva("FIM. ")

FimProcedimento
inicio

      pulaLinha()
      Fibonacci(9)
      pulaLinha()

fimalgoritmo