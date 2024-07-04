Algoritmo "GUANABARA_09.4"


var

   contador, num, soma, maior: Inteiro

inicio

      EscrevaL ("SOMADOR DE NÚMEROS")
      EscrevaL (" ")

      contador <- 1
      soma <- 0

      Enquanto (contador <= 10 ) faca

         Escreva("DIGITE O", contador, "o. NÚMERO: ")
         Leia(num)

         contador <- contador + 1
         soma <- soma + num

         Se ( num > maior ) entao
            maior <- num
         FimSe

      FimEnquanto
      EscrevaL("")
      EscrevaL("A SOMA DOS NÚMEROS É:", soma, ".")
      EscrevaL(maior, " FOI O MAIOR NÚMERO INFORMADO.")

fimalgoritmo