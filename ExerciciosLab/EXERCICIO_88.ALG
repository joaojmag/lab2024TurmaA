algoritmo "exercicio_88"
var

   i: inteiro

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("----------------")

FimProcedimento


Procedimento Gerador(frase: caractere; cont: inteiro)
inicio

      Para i <- 1 ate cont faca
           Escreval(frase)
      fimpara

FimProcedimento

inicio

      pulaLinha()
      Gerador("Aprendendo Portugol!", 4)
      pulaLinha()


fimalgoritmo