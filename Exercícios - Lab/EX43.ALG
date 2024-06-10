Algoritmo "Ex43"

//43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
//marcando os números que forem divisíveis por 4, exatamente como mostrado
//abaixo: 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...

Var
   contador : Inteiro

inicio

      EscrevaL (" ____________________________________________" )
      EscrevaL ("|                                            |")
      EscrevaL ("| Contador 30 a 1 mostrados dívisiveis por 4 |")
      EscrevaL ("|____________________________________________|")
      EscrevaL (" ")

      contador <- 30

      Enquanto (contador >= 1 ) faca
      
               Escreva(contador, " ")
               contador <- contador - 1

               Se ( contador % 4 = 0 ) entao
                  Escreva(" [",contador, " ] ")
                  contador <- contador -1
               FimSe
      FimEnquanto

      EscrevaL("")
      EscrevaL( " Acabou!" )

fimalgoritmo