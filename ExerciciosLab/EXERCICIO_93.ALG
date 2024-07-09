algoritmo "exercicio_93"
var

   A, B, C, i: inteiro

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento

Procedimento cursor()
inicio

      Escreval("--------------------")

FimProcedimento

Procedimento Contador(comeco: inteiro; quantidade: inteiro; pulador: inteiro)
inicio

      comeco <- A
      quantidade <- B
      pulador <- C
      
      Para i <- comeco ate quantidade faca
           Escreva(comeco, " >> ")
           comeco <- comeco + pulador
      fimpara

      Escreva("FIM.")

FimProcedimento

inicio

      Escreva("DIGITE O INICIO DA SEQUENCIA: ")
      Leia(A)
      
      Escreva("DIGITE A QUANTIDADE DE TERMOS DA SEQUENCIA: ")
      Leia(B)
      
      Escreva("DIGITE DE QUANTO EM QUANTO VAI PULAR NA SEQUENCIA: ")
      Leia(C)

      pulaLinha()
      cursor()
      Contador(A, B, C)
      pulaLinha()
      cursor()


fimalgoritmo