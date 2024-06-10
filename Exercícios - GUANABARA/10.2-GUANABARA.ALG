Algoritmo "10.2-GUANABARA"

//Aula #10.2 Guanabara "Conta quantos negativos tem"

var

   num, cont, totalNeg : Inteiro

inicio

      EscrevaL (" _____________________" )
      EscrevaL ("|                     |")
      EscrevaL ("|   Conta Negativos   |")
      EscrevaL ("|_____________________|")
      EscrevaL (" ")

      cont <- 1
      totalNeg <- 0
      
      Repita
      Escreva(" Digite um número: ")
      Leia(num)
      
      Se (num < 0) entao
         totalNeg <- totalNeg + 1
      FimSe
      
      cont <- cont + 1

      Ate( cont > 5 )
      EscrevaL(" Você digitou: ", totalNeg, " valores negativos.")

fimalgoritmo
