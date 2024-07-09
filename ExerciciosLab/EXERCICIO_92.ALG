algoritmo "exercicio_92"
var

   A: inteiro

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento

Procedimento cursor()
inicio

      Escreval("--------------------")
      
FimProcedimento

Procedimento ParOuImpar(X: inteiro)
inicio

      se (X%2 = 0) entao
         Escreval(X, " É PAR.")
      senao
         Escreval(X, " É ÍMPAR")
      fimse


FimProcedimento

inicio

      Escreva("DIGITE UM NÚMERO: ")
      Leia(A)

      pulaLinha()
      cursor()
      ParOuImpar(A)
      cursor()


fimalgoritmo