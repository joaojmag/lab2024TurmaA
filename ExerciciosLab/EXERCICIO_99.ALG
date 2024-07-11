Algoritmo "exercicio_99"


var

   A, B, potencial, i: inteiro

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

Funcao Potencia(X,Y: inteiro) : inteiro
var a: inteiro
Inicio

      potencial <- 0

      Se (Y = 0) entao
         potencial <- 1
         retorne potencial
      fimSe

      Se (Y = 1) entao
         potencial <- X * 1
      fimSe

      Se (Y >= 2) entao
         Para i <- 1 ate Y faca
                a <- X * X
                potencial <- potencial + a
         fimPara
      fimSe

      Retorne potencial
      
FimFuncao
Inicio

      Escreva("DIGITE A BASE: ")
      Leia(A)
      Escreva("DIGITE O EXPOENTE: ")
      Leia(B)
      pulaLinha()
      cursor()
      potencial <- Potencia(A,B)
      EscrevaL("A POTÊNCIA DE", A, " ELEVADO A",B, " É:", potencial)
      cursor()9


fimalgoritmo