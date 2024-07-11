Algoritmo "GUANABARA_09.3"


var

   valor, pulo, contador: Inteiro

inicio

      EscrevaL ("CONTADOR DE NÚMEROS")
      EscrevaL ("---------------------")

      contador <- 0
      Escreva("DESEJA CONTA ATÉ QUANDO? ")
      Leia(valor)

      Escreva("DESEJA CONTAR DE QUANTO EM QUANTO? ")
      Leia(pulo)

      Enquanto (contador <= valor) faca
               EscrevaL(contador)
               contador <- contador + pulo
      FimEnquanto

      Escreva("FIM.")

fimalgoritmo