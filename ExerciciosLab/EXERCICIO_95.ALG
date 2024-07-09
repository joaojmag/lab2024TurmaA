algoritmo "exercicio_95"
var

   A, B, RES: inteiro

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento

// funções

Funcao somador(X, Y: inteiro) : inteiro
var S: inteiro
inicio

      S <- X + Y
      Retorne S

FimFuncao

inicio

      Escreva("DIGITE UM NÚMERO: ")
      Leia(A)

      Escreva("DIGITE UM NÚMERO: ")
      Leia(B)

      pulaLinha()
      RES <- somador(A, B)
      Escreval("A SOMA ENTRE ELES É ", RES)

fimalgoritmo