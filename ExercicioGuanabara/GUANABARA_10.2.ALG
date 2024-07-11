algoritmo "GUANABARA_10.2"

var

   num, cont, totalNeg: inteiro

inicio

      cont <- 1
      totalNeg <- 0

      Repita
      Escreva("DIGITE UM NÚMERO: ")
      Leia(num)

      se (num < 0) entao
         totalNeg <- totalNeg + 1
      FimSe

      cont <- cont + 1

      ate(cont > 5)
      EscrevaL("VOCÊ DIGITOU: ", totalNeg, " VALORES NEGATIVOS.")

fimalgoritmo