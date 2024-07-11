Algoritmo "exercicio_99"


var

   A, B, potencial, i: real

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

Funcao Potencia(X,Y: inteiro) : real
Inicio

      Retorne X^Y

FimFuncao
Inicio

      Escreva("DIGITE A BASE: ")
      Leia(A)
      Escreva("DIGITE O EXPOENTE: ")
      Leia(B)
      pulaLinha()
      cursor()
      potencial <- Potencia(A,B)
      EscrevaL("A POTÊNCIA DE", A, " ELEVADO A", B, " É:", potencial)
      cursor()9


fimalgoritmo