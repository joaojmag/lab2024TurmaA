algoritmo "exercicio_89"
var

   i: inteiro

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento


Procedimento Gerador(frase: caractere; cont: inteiro; linha: inteiro)
inicio

      Para i <- 1 ate cont faca
           Escreval(frase)
      fimpara
      
      Escolha linha

      caso 1
      Escreval("----------------")

      caso 2
      Escreval("<<<<-------->>>>")

      caso 3
      Escreval("+==============+")

      fimescolha

FimProcedimento

inicio

      Gerador("", 0, 2)
      Gerador("Aprendendo Portugol!", 3, 2)
      pulaLinha()


fimalgoritmo