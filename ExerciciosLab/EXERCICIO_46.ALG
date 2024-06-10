algoritmo "exercicio_46"
var

   soma, contador, expressao: inteiro

inicio

      contador <- 6
      soma <- 0
      Escreval("APLICATIVO DE SOMA.")
      Escreval("--------------------.")
      
      Repita
          Escreva(contador)
          soma <- soma + contador
          contador <- contador + 2
      ate (contador > 100)
      
      Escreval("")
      Escreval("")
      Escreva("A soma dos numeros totais é ", soma)

fimalgoritmo