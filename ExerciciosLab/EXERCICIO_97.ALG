algoritmo "exercicio_97"
var

   A, B, C, RES, numMaior: real

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

Funcao maior(X, Y, Z: real) : real
inicio

      se (X > Y) e (X > Z) entao
         Retorne X
      fimse
      
      se (Y > X) e (Y > Z) entao
         Retorne Y
      fimse
      
      se (Z > X) e (Z > Y) entao
         Retorne Z
      fimse
      
      se (Z = X) e (Y = Z) entao
         Retorne 909
      fimse

FimFuncao

inicio

      Escreva("DIGITE O 1º NÚMERO: ")
      Leia(A)

      Escreva("DIGITE O 2º NÚMERO: ")
      Leia(B)
      
      Escreva("DIGITE O 3º NÚMERO: ")
      Leia(C)

      pulaLinha()
      cursor()

      se maior(A, B, C) = 909 entao
         Escreval("OS NÚMEROS DIGITADOS SÃO IGUAIS.")
      senao
           numMaior <- maior(A, B, C)
           Escreval("O MAIOR NÚMERO É:", numMaior)
      fimse
      cursor()

fimalgoritmo