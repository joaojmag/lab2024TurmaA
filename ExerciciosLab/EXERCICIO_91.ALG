algoritmo "exercicio_91"
var

   A, B: inteiro

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento


Procedimento Maior(X, Y: inteiro)
inicio

      se (X > Y) entao
         Escreval(X, " É O MAIOR NÚMERO.")
      senao
         Escreval(Y, " É O MAIOR NÚMERO.")
      fimse
      
      se (X = Y) entao
         Escreval(X, " e ", Y, " SÃO IGUAIS.")
      fimse

FimProcedimento

inicio

      Escreva("DIGITE UM NÚMERO: ")
      Leia(A)

      Escreva("DIGITE UM NÚMERO: ")
      Leia(B)

      pulaLinha()
      Maior(A, B)


fimalgoritmo