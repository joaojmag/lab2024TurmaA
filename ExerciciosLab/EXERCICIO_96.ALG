algoritmo "exercicio_96"
var

   A, B, RES: real

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento

Procedimento cursor()
inicio

      Escreval("------------------------")

FimProcedimento

// funções

Funcao media(X, Y: real) : real
var S: real
    M: real
inicio

      S <- X + Y
      M <- S/2
      Retorne M

FimFuncao

inicio

      Escreva("DIGITE A PRIMEIRA NOTA: ")
      Leia(A)

      Escreva("DIGITE A SEGUNDA NOTA: ")
      Leia(B)

      pulaLinha()
      cursor()
      RES <- media(A, B)
      Escreval("A MEDIA DO ALUNO É ", RES)
      cursor()

fimalgoritmo