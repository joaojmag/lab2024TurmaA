Algoritmo "GUANABARA_11.3"

var

   cont, num, total10, somaImpar : Inteiro

inicio

      EscrevaL ("--------------------------")
      EscrevaL ("NÚMEROS ENTRE 0 E 10")
      EscrevaL ("--------------------------")
      EscrevaL (" ")

      Para cont <- 1 ate 6 faca

           Escreva("DIGITE UM NÚMERO: ")
           Leia(num)

           se (num >= 0) e (num <= 10) entao
              total10 <- total10 + 1

              se (num % 2 = 1) entao
                 somaImpar <- somaImpar + num

              fimSe
         fimSe
      FimPara
      
      Escreval("")
      EscrevaL("AO TODO FORAM DIGITADOS:", total10, " VALORES ENTRE 0 E 10. ")
      EscrevaL("A SOMA DOS NÚMEROS ÍMPARES FOI", somaImpar)

fimalgoritmo