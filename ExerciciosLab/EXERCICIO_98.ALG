algoritmo "exercicio_98"
var

   A, B, RES, i: inteiro

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

Funcao SuperSomador(X,Y: inteiro) : inteiro
inicio

      Para i <- X ate Y faca
           RES <- RES + i
      fimpara
      
      Retorne RES

FimFuncao

inicio

      Escreva("DIGITE O INICIO DA CONTAGEM: ")
      Leia(A)

      Escreva("DIGITE O FINAL DA CONTAGEM: ")
      Leia(B)

      pulaLinha()
      cursor()
      RES <- SuperSomador(A, B)
      Escreval("A SOMA DE TODOS OS NÚMERO ENTRE: ", A, " E ", B, " É: ",RES)
      cursor()

fimalgoritmo