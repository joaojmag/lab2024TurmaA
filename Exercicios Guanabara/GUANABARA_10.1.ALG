Algoritmo "GUANABARA_10.1"


var

   num, soma: inteiro
   resposta: caracter

inicio

      EscrevaL ("CONTADOR DE NÚMEROS.")
      Escreval("------------------------------")

      soma <- 0
      resposta <- "S"

      Enquanto (resposta = "S") faca

         Escreva("INSIRA O NÚMERO DESEJADO: ")
         Leia(num)

         soma <- soma + num
         
         Escreva("DESEJA CONTINUAR? [S/N] ")
         Leia(resposta)

      FimEnquanto
      
      EscrevaL("")
      EscrevaL("A SOMA DOS NÚMEROS É:", soma, ".")

fimalgoritmo