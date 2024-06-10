algoritmo "exercicio_47"
var

   soma, contador: inteiro

inicio

      contador <- 500
      soma <- 0
      Escreval("APLICATIVO DE SOMA.")
      Escreval("--------------------.")

      Repita
          Escreva(contador)
          soma <- soma + contador
          contador <- contador - 50
      ate (contador < 0)

      Escreval("")
      Escreval("")
      Escreval("A soma dos numeros totais é",soma)
      Escreva("")

fimalgoritmo